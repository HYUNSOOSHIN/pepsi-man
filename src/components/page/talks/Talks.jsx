import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"

const Talks = (props) => {
  const history = useHistory()
  const { talks } = props
  const [orderBy, setOrderBy] = React.useState(0)

  function orderByFunc(list) {
    const sortList = [...list]
    if (orderBy === 0) {
      return sortList.sort((a, b) => new Date(b.regDate) - new Date(a.regDate))
    } else if (orderBy === 1) {
      return sortList.sort((a, b) => new Date(b.likeCount) - new Date(a.likeCount))
    }
  }

  return (
    <Layout>
      <Section>
        <OrderByView>
          <OrderByButton bgColor={orderBy === 0 ? "#646568" : "#ffffff"} color={orderBy === 0 ? "#ffffff" : "#646568"} onClick={() => setOrderBy(0)}>
            <p>최신순</p>
          </OrderByButton>
          <OrderByButton bgColor={orderBy === 1 ? "#646568" : "#ffffff"} color={orderBy === 1 ? "#ffffff" : "#646568"} onClick={() => setOrderBy(1)}>
            <p>인기순</p>
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
        {orderByFunc(talks).map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </TalkListSection>
    </Layout>
  )
}

export default Container(Talks)

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
  width: 80px;
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
    width: 60px;
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
  overflow-y: auto;
  flex: 1;
  margin-top: 50px;
`
