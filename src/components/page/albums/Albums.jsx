import React from "react"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import AlbumItem from "../../item/AlbumItem"

const Albums = (props) => {
  const { albums } = props

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
