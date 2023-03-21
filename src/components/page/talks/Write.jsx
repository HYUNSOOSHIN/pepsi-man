import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { dbService, storageService } from "../../../fireBase"
import Layout from "../../common/Layout"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"
import { trim } from "utils/util"

const Write = () => {
  const history = useHistory()
  const { user } = useSelector((state) => state.reducer)
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  // 이미지 형식 {base64: null, file: null}
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")
  const inputRef = useRef()

  const onSubmit = async () => {
    if (trim(title) == "") return alert("Please enter a title")
    else if (trim(contents) == "") return alert("Please enter a contents")

    let fileUrl = ""
    if (fileData !== "" && file !== null) {
      const fileRef = storageService.ref().child(`talks/${file.name}`)
      const response = await fileRef.putString(fileData, "data_url")
      fileUrl = await response.ref.getDownloadURL()
    }

    await dbService
      .collection("talks")
      .add({
        uid: user.uid,
        writer: user.displayName || "Person",
        title,
        contents,
        imageUrl: fileUrl,
        clickCount: 0,
        commentCount: 0,
        createdAt: Date.now(),
      })
      .then(() => history.goBack())
  }

  return (
    <Layout>
      <InputSection>
        <Input type={"text"} placeholder={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder={"Contents"} value={contents} onChange={(e) => setContents(e.target.value)}></Textarea>
        <LeftTextView error={contents.length > 500}>
          <p>{contents.length}/500</p>
        </LeftTextView>
      </InputSection>

      <ImageSection>
        <input
          ref={inputRef}
          style={{ display: "none" }}
          type={"file"}
          onChange={async (e) => {
            if (e.target.files[0]) {
              const reader = new FileReader()

              reader.onload = (event) => {
                setFileData(event.target.result)
              }
              setFile(e.target.files[0])
              reader.readAsDataURL(e.target.files[0])
            }
          }}
          accept={"image/*"}
        />
        <ImageAddButton onClick={() => inputRef.current.click()}>Add image</ImageAddButton>

        <ImageListView>
          {fileData && (
            <ImageItem>
              <img src={fileData} alt="image" />
              <button
                onClick={() => {
                  setFile(null)
                  setFileData("")
                }}
              >
                <RemoveCircleIcon />
              </button>
            </ImageItem>
          )}
        </ImageListView>
      </ImageSection>

      <ButtonsSection>
        <Button margin={true} onClick={() => history.goBack()}>
          <p>cancel</p>
        </Button>
        <Button onClick={onSubmit}>
          <p>write</p>
        </Button>
      </ButtonsSection>
    </Layout>
  )
}

export default Write

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
  }
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 20px;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
`
const LeftTextView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: fit-content;
  & > p {
    margin-top: 5px;
    color: ${(props) => (props.error ? "#ff0000" : "#000")};
  }
`
// IMAGE
const ImageSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ImageAddButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin-right: 20px;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  font-weight: bold;
`
const ImageListView = styled.div`
  flex: 1;
  width: 100%;
  &::after {
    content: "";
    clear: both;
    display: block;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`
const ImageItem = styled.div`
  position: relative;
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 10px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  & > button {
    background-color: #00000000;
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 33.3%;
    height: auto;
    margin-right: 0;
    &::after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
    & > img {
      position: absolute;
    }
  }
`
// BUTTONS
const ButtonsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
const Button = styled.button`
  width: fit-content;
  height: fit-content;
  margin-right: ${(props) => (props.margin ? 10 : 0)}px;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 5px;
  & > p {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 15px;
    }
  }
`
