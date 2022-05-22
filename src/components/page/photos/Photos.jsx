import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Layout from "../../common/Layout"
import PhotoItem from "components/item/PhotoItem"
import PhotoDialog from "components/dialog/photoDialog"
import zior from "./../../../images/zior.png"

const Photos = () => {
  const [photoDialog, setPhotoDialog] = useState({ open: false, img: null })

  useEffect(() => {
    dbService.collection("photos").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data())
      })
    })
  }, [])

  return (
    <Layout>
      <PhotoDialog open={photoDialog.open} onClose={() => setPhotoDialog({ ...photoDialog, open: false })} img={photoDialog.img} />
      <Section>
        {Array(10)
          .fill(0)
          .map((i, idx) => (
            <PhotoItem key={idx} img={zior} onClick={() => setPhotoDialog({ open: true, img: zior })} />
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
