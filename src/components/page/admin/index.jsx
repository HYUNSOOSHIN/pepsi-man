import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import { dbService, uploadImage } from "../../../fireBase"
import useImageFile from "utils/useImageFile"
import Layout from "components/common/Layout"

const Admin = () => {
  const [main, setMain] = useState("")
  const { file, fileData, setFileData, selectFile } = useImageFile()
  const inputRef = useRef()

  useEffect(() => {
    const unsubscribe = dbService.collection("main").onSnapshot((snapshot) => {
      setMain({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id })
    })

    return () => unsubscribe()
  }, [])

  const onSubmit = useCallback(async () => {
    let fileUrl = ""
    if (fileData !== "") {
      fileUrl = await uploadImage("main", file)
    }
    const data = { ...main }
    const id = data.id

    delete data.id

    await dbService
      .collection("main")
      .doc(id)
      .update({
        mainImage: fileUrl || data.mainImage,
      })
      .then(() => {
        setFileData("")
        alert("Changed!")
      })
  }, [file, fileData])

  return (
    <Layout>
      <ProfileImgSection>{(fileData || main.mainImage) && <img src={fileData || main.mainImage} alt={"profile img"} />}</ProfileImgSection>

      <InputSection>
        <InputView>
          <Label>Image</Label>
          <input ref={inputRef} style={{ display: "none" }} type="file" value={""} onChange={selectFile} />
          <Input type="text" value={file?.name || main.mainImage || ""} readOnly />
          <FileButton onClick={() => inputRef.current.click()}>Search</FileButton>
        </InputView>
      </InputSection>

      <ButtonSection>
        <Button onClick={onSubmit}>Save</Button>
      </ButtonSection>
    </Layout>
  )
}

export default Admin

const ProfileImgSection = styled.section`
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
  @media (max-width: 768px) {
    width: 100%;
    & > img {
      width: 90%;
      max-width: 524px;
    }
  }
`

const InputSection = styled.section`
  width: 524px;
  margin: 50px auto 0;
  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`

const InputView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`

const Label = styled.label`
  flex-shrink: 0;
  width: 120px;
  font-size: 18px;
`

const Input = styled.input`
  overflow-x: auto;
  flex: 1;
  height: 40px;
`

const FileButton = styled.button`
  background-color: #4351af;
  flex-shrink: 0;
  width: 80px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Noto Sans KR";
  white-space: nowrap;
`

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

const Button = styled.button`
  background-color: #4351af;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-family: "Noto Sans KR";

  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`
