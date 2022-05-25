import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { dbService, storageService } from "../../../../fireBase"
import Layout from "components/common/Layout"

const AdminIntroduce = () => {
  const [introduce, setIntroduce] = useState({})
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")
  const inputRef = useRef()
  const previewRef = useRef()

  useEffect(() => {
    dbService.collection("introduce").onSnapshot((snapshot) => {
      setIntroduce({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id })
    })
  }, [])

  const onSubmit = async () => {
    let fileUrl = ""
    if (fileData !== "") {
      const fileRef = storageService.ref().child(`profile/${file.name}`)
      const response = await fileRef.putString(fileData, "data_url")
      fileUrl = await response.ref.getDownloadURL()
    }
    const data = { ...introduce }
    const id = data.id

    delete data.id

    await dbService
      .collection("introduce")
      .doc(id)
      .update({
        ...data,
        imageUrl: fileUrl || data.imageUrl,
      })
      .then(() => {
        setFileData("")
        alert("Changed!")
      })
  }

  return (
    <Layout>
      <ProfileImgSection>
        <img ref={previewRef} src={introduce.imageUrl} alt={"profile img"} />
      </ProfileImgSection>

      <InputSection>
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
                  previewRef.current.src = event.target.result
                }
                setFile(e.target.files[0])
                reader.readAsDataURL(e.target.files[0])
              }
            }}
          />
          <Input type="text" value={file ? file.name : introduce.imageUrl} readOnly />
          <FileButton onClick={() => inputRef.current.click()}>Search</FileButton>
        </InputView>
        <InputView>
          <Label>Name</Label>
          <Input type="text" value={introduce.name} onChange={(e) => setIntroduce({ ...introduce, name: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Nationality</Label>
          <Input type="text" value={introduce.nationality} onChange={(e) => setIntroduce({ ...introduce, nationality: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Date of birth</Label>
          <Input type="text" value={introduce.birth} onChange={(e) => setIntroduce({ ...introduce, birth: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Debut</Label>
          <Input type="text" value={introduce.debut} onChange={(e) => setIntroduce({ ...introduce, debut: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Crew</Label>
          <Input type="text" value={introduce.crew} onChange={(e) => setIntroduce({ ...introduce, crew: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Label</Label>
          <Input type="text" value={introduce.label} onChange={(e) => setIntroduce({ ...introduce, label: e.target.value })} />
        </InputView>

        <InputView>
          <Label>Instagram</Label>
          <Input type="text" value={introduce.instaUrl} onChange={(e) => setIntroduce({ ...introduce, instaUrl: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Tiktok</Label>
          <Input type="text" value={introduce.tiktokUrl} onChange={(e) => setIntroduce({ ...introduce, tiktokUrl: e.target.value })} />
        </InputView>
        <InputView>
          <Label>Youtube</Label>
          <Input type="text" value={introduce.youtubeUrl} onChange={(e) => setIntroduce({ ...introduce, youtubeUrl: e.target.value })} />
        </InputView>
        <InputView>
          <Label>SoundCloud</Label>
          <Input type="text" value={introduce.soundcloudUrl} onChange={(e) => setIntroduce({ ...introduce, soundcloudUrl: e.target.value })} />
        </InputView>
      </InputSection>

      <ButtonSection>
        <Button onClick={onSubmit}>Save</Button>
      </ButtonSection>
    </Layout>
  )
}

export default AdminIntroduce

const ProfileImgSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > img {
    width: 524px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
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
