import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../fireBase"
import Layout from "../common/Layout"

const Home = () => {
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    dbService.collection("main").onSnapshot((snapshot) => {
      setMainImage(snapshot.docs[0].data().mainImage)
    })
  }, [])

  return (
    <Layout>
      <MainSection>{mainImage && <img src={mainImage} alt={"home img"} />}</MainSection>
    </Layout>
  )
}

export default Home

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 524px;
  height: 524px;
  margin: 0 auto;
  & > img {
    width: 524px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 100%;
    & > img {
      width: 90%;
      max-width: 524px;
    }
  }
`
