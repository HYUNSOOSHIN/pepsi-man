import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Layout from "../../common/Layout"
import PhotoItem from "components/item/PhotoItem"
import PhotoDialog from "components/dialog/PhotoDialog"

const Photos = () => {
  const [photoDialog, setPhotoDialog] = useState({ open: false, img: null })
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    dbService.collection("photos").onSnapshot((snapshot) => {
      const photoArray = snapshot.docs.map((doc) => doc.data())
      setPhotoList(photoArray)
    })
  }, [])

  return (
    <Layout>
      <PhotoDialog open={photoDialog.open} onClose={() => setPhotoDialog({ ...photoDialog, open: false })} img={photoDialog.img} />
      <Section>
        {photoList
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((i, idx) => (
            <PhotoItem key={idx} img={i.imageUrl} onClick={() => setPhotoDialog({ open: true, img: i.imageUrl })} />
          ))}
      </Section>
    </Layout>
  )
}

export default Photos

const Section = styled.section`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`
