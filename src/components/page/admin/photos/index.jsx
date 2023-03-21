import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../../../fireBase"
import Layout from "components/common/Layout"
import PhotoItem from "components/item/PhotoItem"
import PhotoAddDialog from "components/dialog/PhotoAddDialog"
import PhotoEditDialog from "components/dialog/PhotoEditDialog"

const AdminPhotos = () => {
  const [photoAddDialog, setPhotoAddDialog] = useState(false)
  const [photoEditDialog, setPhotoEditDialog] = useState({ open: false, data: null })
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    dbService.collection("photos").onSnapshot((snapshot) => {
      const photoArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setPhotoList(photoArray)
    })
  }, [])

  const onClickAdd = () => {
    setPhotoAddDialog(true)
  }

  return (
    <Layout>
      <PhotoAddDialog open={photoAddDialog} onClose={() => setPhotoAddDialog(false)} />
      <PhotoEditDialog open={photoEditDialog.open} onClose={() => setPhotoEditDialog({ open: false, data: null })} data={photoEditDialog.data} />
      <FlexEndView>
        <AddButton onClick={onClickAdd}>Add Photo</AddButton>
      </FlexEndView>
      <PhotoSection>
        {photoList
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((i, idx) => (
            <PhotoItem key={idx} img={i.imageUrl} onClick={() => setPhotoEditDialog({ open: true, data: i })} />
          ))}
      </PhotoSection>
    </Layout>
  )
}

const FlexEndView = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`
const AddButton = styled.button`
  background-color: #4351af;
  padding: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Noto Sans KR";
`
const PhotoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export default AdminPhotos
