import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { dbService } from "../../../../fireBase"
import Layout from "components/common/Layout"
import AlbumItem from "components/item/AlbumItem"

const AdminAlbums = () => {
  const history = useHistory()
  const [albumList, setAlbumList] = useState([])

  useEffect(() => {
    dbService.collection("albums").onSnapshot((snapshot) => {
      setAlbumList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const onClickAdd = useCallback(() => {
    history.push("/admin/album/add")
  }, [])

  return (
    <Layout>
      <FlexEndView>
        <AddButton onClick={onClickAdd}>Add Album</AddButton>
      </FlexEndView>

      <AlbumSection>
        {albumList
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((albumItem, albumIndex) => (
            <AlbumItem key={albumIndex} albumItem={albumItem} onClick={() => history.push(`/admin/album/edit/${albumItem.id}`)} />
          ))}
      </AlbumSection>
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
const AlbumSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export default AdminAlbums
