import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Layout from "../../common/Layout"
import AlbumItem from "../../item/AlbumItem"

const Albums = () => {
  const history = useHistory()
  const [albumList, setAlbumList] = useState([])

  useEffect(() => {
    dbService.collection("albums").onSnapshot((snapshot) => {
      setAlbumList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  return (
    <Layout>
      <Section>
        {albumList
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((albumItem, albumIndex) => (
            <AlbumItem key={albumIndex} albumItem={albumItem} onClick={() => history.push(`/albums/${albumItem.id}`)} />
          ))}
      </Section>
    </Layout>
  )
}

export default Albums

const Section = styled.section`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`
