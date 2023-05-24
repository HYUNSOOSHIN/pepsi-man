import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"

const Talks = () => {
  const history = useHistory()
  const [talkList, setTalkList] = useState([])
  const [orderBy, setOrderBy] = useState(0)

  useEffect(() => {
    dbService.collection("talks").onSnapshot((snapshot) => {
      setTalkList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const orderByFunc = useCallback(
    (list) => {
      const sortList = [...list]
      if (orderBy === 0) {
        return sortList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      } else if (orderBy === 1) {
        return sortList.sort((a, b) => new Date(b.clickCount) - new Date(a.clickCount))
      }
    },
    [orderBy]
  )

  const onClickTalkItem = useCallback(async (talk) => {
    history.push(`/talks/${talk.id}`)
    const temp = { ...talk }
    delete temp.id
    await dbService
      .collection("talks")
      .doc(talk.id)
      .update({
        ...temp,
        clickCount: (talk.clickCount || 0) + 1,
      })
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
        {orderByFunc(talkList).map((item, index) => (
          <TalkItem key={index} item={item} onClick={() => onClickTalkItem(item)} />
        ))}
      </TalkListSection>
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
