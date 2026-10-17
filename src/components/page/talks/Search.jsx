import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { debounce } from "lodash"
import { dbService, increment } from "../../../fireBase"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import SearchIcon from "@material-ui/icons/Search"

const Search = () => {
  const history = useHistory()
  const [searchText, setSearchText] = useState("")
  const [talkList, setTalkList] = useState([])
  const [filterTalkList, setFilterTalkList] = useState([])

  // Firestore는 부분 문자열 검색을 지원하지 않아 클라이언트에서 필터링한다
  // 실시간 구독 대신 진입 시 한 번만 조회해 문서 변경마다 재전송되는 읽기를 막는다
  useEffect(() => {
    let cancelled = false
    dbService
      .collection("talks")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        if (cancelled) return
        const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setTalkList(list)
        setFilterTalkList(list)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const onChangeInputData = (e) => {
    setSearchText(e.target.value)
    filterList(e.target.value)
  }

  const filterList = useCallback(
    debounce((text) => {
      const filtered = talkList.filter((item) => {
        if (text == "") return true
        else return item.title.includes(text) || item.contents.includes(text)
      })
      setFilterTalkList(filtered)
    }, 500),
    [talkList]
  )

  // 언마운트 시 대기 중인 debounce 호출 취소
  useEffect(() => () => filterList.cancel(), [filterList])

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
        <ArrowBackIcon onClick={() => history.goBack()} />
        <SearchIcon />
        <input type={"text"} placeholder={"Please enter a search term"} value={searchText} onChange={onChangeInputData} />
      </Section>

      <TalkListSection>
        {filterTalkList.map((item, index) => (
          <TalkItem key={index} item={item} onClick={() => onClickTalkItem(item)} />
        ))}
      </TalkListSection>
    </Layout>
  )
}

export default Search

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid;
  & > svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  & > input {
    flex: 1;
    min-width: 0;
    height: 30px;
    border: none;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    & > svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    & > input {
      height: 20px;
      font-size: 16px;
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
