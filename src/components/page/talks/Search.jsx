import React from "react"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import SearchIcon from "@material-ui/icons/Search"

const Search = (props) => {
  const { talks } = props
  const [searchText, setSearchText] = React.useState("")

  return (
    <Layout>
      <Section>
        <SearchIcon />
        <input type={"text"} placeholder={"검색어를 입력해주세요."} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </Section>

      <TalkListSection>
        {talks.map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </TalkListSection>
    </Layout>
  )
}

export default Container(Search)

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid;
  & > svg {
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
