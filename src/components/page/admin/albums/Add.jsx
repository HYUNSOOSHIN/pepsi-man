import React, { useState, useRef, useCallback } from "react"
import styled from "styled-components"
import { IconButton } from "@material-ui/core"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import YouTubeIcon from "@material-ui/icons/YouTube"
import ControlPoint from "@material-ui/icons/ControlPoint"
import { dbService, storageService } from "../../../../fireBase"
import Layout from "components/common/Layout"
import TrackDialog from "components/dialog/TrackDialog"

const AdminAlbumAdd = () => {
  const [trackDialog, setTrackDialog] = useState({ open: false, data: null })
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [date, setDate] = useState("")
  const [trackList, setTrackList] = useState([])
  const inputRef = useRef()

  const onClickTrackDialogAdd = useCallback(
    (value) => {
      const index = trackList.findIndex((i) => i.trackNo == value.trackNo)
      if (index != -1) {
        const temp = [...trackList]
        temp[index] = value
        setTrackList(temp)
      } else {
        const temp = [...trackList]
        temp.push({ ...value, trackNo: trackList.length > 0 ? trackList[trackList.length - 1].trackNo + 1 : 0 })
        setTrackList(temp)
      }
      setTrackDialog({ open: false, data: null })
    },
    [trackList]
  )

  const onChangeInputFile = useCallback((e) => {
    if (e.target.files[0]) {
      const reader = new FileReader()

      reader.onload = (event) => {
        setFileData(event.target.result)
      }
      setFile(e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
    }
  }, [])

  const onSubmit = useCallback(async () => {
    if (fileData == "") return alert("Please enter a image")
    else if (title == "") return alert("Please enter a title")
    else if (artist == "") return alert("Please enter a artist")
    else if (date == "") return alert("Please enter a date")

    let fileUrl = ""
    if (fileData !== "" && file !== null) {
      const fileRef = storageService.ref().child(`albums/${file.name}`)
      const response = await fileRef.putString(fileData, "data_url")
      fileUrl = await response.ref.getDownloadURL()
    }

    await dbService
      .collection("albums")
      .add({ imageUrl: fileUrl, title, artist, releaseDate: date, createdAt: Date.now() })
      .then((res) => {
        trackList.forEach((i) => dbService.collection("tracks").add({ albumSeq: res.id, ...i, createdAt: Date.now() }))
        history.back()
      })
  }, [file, fileData, title, artist, date, trackList])

  return (
    <Layout>
      <TrackDialog
        open={trackDialog.open}
        onClose={() => setTrackDialog({ open: false, data: null })}
        data={trackDialog.data}
        onClickAdd={onClickTrackDialogAdd}
      />

      <ProfileImgSection>{fileData && <img src={fileData} alt={"profile img"} />}</ProfileImgSection>

      <InputSection>
        <InputView>
          <Label>Image</Label>
          <input ref={inputRef} style={{ display: "none" }} type="file" onChange={onChangeInputFile} />
          <Input type="text" value={file ? file.name : ""} readOnly />
          <FileButton onClick={() => inputRef.current.click()}>Search</FileButton>
        </InputView>
        <InputView>
          <Label>Title</Label>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputView>
        <InputView>
          <Label>Artist</Label>
          <Input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </InputView>
        <InputView>
          <Label>Date</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </InputView>
      </InputSection>

      <TrackSection>
        <BetweenView>
          <Label>Track</Label>
          <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => setTrackDialog({ open: true, data: null })}>
            <ControlPoint />
          </IconButton>
        </BetweenView>
        <UL>
          <LI>
            <p>NO.</p>
            <p>TITLE</p>
            <p>LYRICS</p>
            <p>MV</p>
            <p>EDIT</p>
            <p>ACTIONS</p>
          </LI>

          {trackList
            .sort((a, b) => a.trackNo - b.trackNo)
            .map((i, idx) => (
              <LI key={idx}>
                <p>{idx + 1}</p>
                <p>{i.title}</p>
                <p>
                  <p>{i.lyrics === "" ? null : <LibraryBooksIcon />}</p>
                </p>
                <p>{i.mv === "" ? null : <YouTubeIcon />}</p>
                <button onClick={() => setTrackDialog({ open: true, data: i })}>EDIT</button>
                <button
                  onClick={() => {
                    const temp = [...trackList]
                    temp.splice(idx, 1)
                    setTrackList(temp)
                  }}
                >
                  DEL
                </button>
              </LI>
            ))}
        </UL>
      </TrackSection>

      <ButtonSection>
        <Button onClick={onSubmit}>Add</Button>
      </ButtonSection>
    </Layout>
  )
}

export default AdminAlbumAdd

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

const TrackSection = styled.div`
  width: 524px;
  margin: 50px auto 0;
  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`

const BetweenView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UL = styled.ul`
  width: 524px;
  height: fit-content;
  margin-top: 20px;
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`

const LI = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  & > p {
    width: 50px;
    padding: 0;
    font-size: 15px;
    text-align: center;
    &:nth-child(2) {
      flex: 1;
      font-size: 15px;
      text-align: left;
    }
  }
  & > button {
    width: 50px;
    padding: 0;
    font-size: 15px;
    text-align: center;
  }
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
