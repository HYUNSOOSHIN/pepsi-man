import React from "react"
import styled from "styled-components"
import Layout from "../common/Layout"
import main from "./../../images/main.jpg"

const Home = () => {
  return (
    <Layout>
      <MainSection>
        <img src={main} alt={"home img"} />
      </MainSection>
    </Layout>
  )
}

export default Home

const MainSection = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  & > img {
    width: 524px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    & > img {
      width: 90%;
      max-width: 524px;
    }
  }
`
