import React, { useState, useRef } from "react"
import styled from "styled-components"
import { dbService, storageService } from "../../fireBase"

export default function PhotoAddDialog(props) {
  const { open, onClose } = props
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")
  const inputRef = useRef()

  const initState = () => {
    setFile(null)
    setFileData("")
  }

  const onClickAdd = async () => {
    let fileUrl = ""
    if (fileData !== "") {
      const fileRef = storageService.ref().child(`photos/${file.name}`)
      const response = await fileRef.putString(fileData, "data_url")
      fileUrl = await response.ref.getDownloadURL()
    }

    if (fileUrl)
      dbService
        .collection("photos")
        .add({ imageUrl: fileUrl })
        .then(() => {
          initState()
          onClose()
        })
  }

  return (
    <Backdrop open={open} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <TitleText>Photo Add</TitleText>
        <InputView>
          <Label>Image</Label>
          <input
            ref={inputRef}
            style={{ display: "none" }}
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                const reader = new FileReader()

                reader.onload = (event) => {
                  setFileData(event.target.result)
                }
                setFile(e.target.files[0])
                reader.readAsDataURL(e.target.files[0])
              }
            }}
          />
          <Input type="text" value={file ? file.name : ""} readOnly />
          <FileButton onClick={() => inputRef.current.click()}>Search</FileButton>
        </InputView>

        <FlexCenterView>
          <AddButton onClick={onClickAdd}>Add</AddButton>
        </FlexCenterView>
      </Container>
    </Backdrop>
  )
}

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

const Container = styled.div`
  position: relative;
  background-color: var(--background);
  width: 524px;
  height: 250px;
  padding: 30px;
  border-radius: 6px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 90%;
    /* max-width: 524px; */
  }
`

const TitleText = styled.p`
  margin-bottom: 25px;
  color: var(--text);
  font-size: 20px;
  font-weight: bold;
`

const InputView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
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
  border: 1px solid;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Noto Sans KR";
  white-space: nowrap;
`

const FlexCenterView = styled.div`
  display: flex;
  justify-content: center;
`

const AddButton = styled.button`
  background-color: #4351af;
  flex-shrink: 0;
  width: 80px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Noto Sans KR";
  white-space: nowrap;
`
