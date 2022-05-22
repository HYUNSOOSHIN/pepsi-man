import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import AlbumItem from "../../item/AlbumItem"

const Albums = (props) => {
  const { albums } = props

  useEffect(() => {
    dbService.collection("albums").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data())
      })
    })
  }, [])

  return (
    <Layout>
      <Section>
        {albums
          .sort((a, b) => b.albumNo - a.albumNo)
          .map((albumItem, albumIndex) => (
            <AlbumItem key={albumIndex} albumItem={albumItem} />
          ))}
      </Section>
    </Layout>
  )
}

export default Container(Albums)

const Section = styled.section`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`
