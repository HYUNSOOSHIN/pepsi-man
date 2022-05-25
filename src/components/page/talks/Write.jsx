import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Layout from "../../common/Layout"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

const Write = () => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  // 이미지 형식 {base64: null, file: null}
  const [images, setImages] = useState([])
  const imageInput = useRef(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  return (
    <Layout>
      <InputSection>
        <Input type={"text"} placeholder={"title"} value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder={"contents"} value={contents} onChange={(e) => setContents(e.target.value)}></Textarea>
        <LeftTextView error={contents.length > 500}>
          <p>{contents.length}/500</p>
        </LeftTextView>
      </InputSection>

      <ImageSection>
        <input
          ref={imageInput}
          style={{ display: "none" }}
          type={"file"}
          onChange={async (e) => {
            if (e.target.files.length === 0) return
            const file = e.target.files[0]
            const base64 = await toBase64(file)
            setImages([...images, { base64, file }])
          }}
          accept={"image/*"}
        />
        <ImageAddButton
          onClick={() => {
            if (images.length === 3) alert("You can add up to 3 images")
            else imageInput.current.click()
          }}
        >
          Add image
        </ImageAddButton>

        <ImageListView>
          {images.map((i, idx) => (
            <ImageItem key={idx}>
              <img src={i.base64} alt={`추가 이미지${idx}`} />
              <button
                onClick={() => {
                  const temp = [...images]
                  temp.splice(idx, 1)
                  setImages(temp)
                }}
              >
                <RemoveCircleIcon />
              </button>
            </ImageItem>
          ))}
        </ImageListView>
      </ImageSection>

      <ButtonsSection>
        <Button margin={true} onClick={() => history.goBack()}>
          <p>cancel</p>
        </Button>
        <Button onClick={() => alert("This is a feature under development")}>
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
  margin-top: 20px;
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
