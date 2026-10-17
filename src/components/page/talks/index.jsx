import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { dbService, increment } from "../../../fireBase"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"

const PAGE_SIZE = 20
// orderBy 인덱스별 정렬 필드 (0: Newest, 1: Popularity)
const ORDER_FIELDS = ["createdAt", "clickCount"]

const Talks = () => {
  const history = useHistory()
  const [talkList, setTalkList] = useState([])
  const [orderBy, setOrderBy] = useState(0)
  const [lastDoc, setLastDoc] = useState(null)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(false)

  // 전체 컬렉션 대신 정렬된 한 페이지씩 조회
  const fetchPage = useCallback(
    (cursor) => {
      let query = dbService.collection("talks").orderBy(ORDER_FIELDS[orderBy], "desc").limit(PAGE_SIZE)
      if (cursor) query = query.startAfter(cursor)
      return query.get()
    },
    [orderBy]
  )

  const applyPage = (snapshot, append) => {
    const page = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setTalkList((prev) => (append ? [...prev, ...page] : page))
    setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null)
    setHasMore(snapshot.docs.length === PAGE_SIZE)
  }

  useEffect(() => {
    let cancelled = false
    fetchPage(null).then((snapshot) => {
      if (!cancelled) applyPage(snapshot, false)
    })

    return () => {
      cancelled = true
    }
  }, [fetchPage])

  const onClickMore = useCallback(async () => {
    setLoading(true)
    try {
      applyPage(await fetchPage(lastDoc), true)
    } finally {
      setLoading(false)
    }
  }, [fetchPage, lastDoc])

  const onClickTalkItem = useCallback(async (talk) => {
    history.push(`/talks/${talk.id}`)
    await dbService
      .collection("talks")
      .doc(talk.id)
      .update({ clickCount: increment(1) })
  }, [])

  return (
    <Layout>
      <Section>
        <OrderByView>
          <OrderByButton bgColor={orderBy === 0 ? "#646568" : "#ffffff"} color={orderBy === 0 ? "#ffffff" : "#646568"} onClick={() => setOrderBy(0)}>
            <p>Newest</p>
          </OrderByButton>
          <OrderByButton bgColor={orderBy === 1 ? "#646568" : "#ffffff"} color={orderBy === 1 ? "#ffffff" : "#646568"} onClick={() => setOrderBy(1)}>
            <p>Popularity</p>
          </OrderByButton>
        </OrderByView>

        <ButtonsView>
          <button onClick={() => history.push("/talks/search")}>
            <SearchIcon />
          </button>
          <button style={{ marginLeft: "5px" }} onClick={() => history.push("/talks/write")}>
            <CreateIcon />
          </button>
        </ButtonsView>
      </Section>

      <TalkListSection>
        {talkList.map((item) => (
          <TalkItem key={item.id} item={item} onClick={() => onClickTalkItem(item)} />
        ))}
      </TalkListSection>

      {hasMore && (
        <MoreView>
          <button onClick={onClickMore} disabled={loading}>
            <p>{loading ? "loading..." : "more"}</p>
          </button>
        </MoreView>
      )}
    </Layout>
  )
}

export default Talks

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
  }
`
const OrderByView = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const OrderByButton = styled.button`
  background-color: ${(props) => props.bgColor};
  width: 90px;
  height: 35px;
  border: 1px solid;
  border-radius: 5px;
  &:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:last-child {
    margin-left: -1px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  & > p {
    color: ${(props) => props.color};
    font-size: 15px;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 65px;
    height: 25px;
    & > p {
      font-size: 12px;
    }
  }
`
const ButtonsView = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > button {
    width: 30px;
    height: 30px;
    padding: 0px;
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    & > button {
      & > svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`
const TalkListSection = styled.section`
  margin-top: 60px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
const MoreView = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  & > button {
    width: 120px;
    height: 35px;
    border: 1px solid;
    border-radius: 5px;
    & > p {
      color: ${(props) => props.theme.text};
      font-size: 15px;
      font-weight: bold;
    }
  }
`
