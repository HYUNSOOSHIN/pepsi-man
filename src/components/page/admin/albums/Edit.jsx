import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { IconButton } from "@material-ui/core"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import YouTubeIcon from "@material-ui/icons/YouTube"
import ControlPoint from "@material-ui/icons/ControlPoint"
import { dbService, storageService } from "../../../../fireBase"
import Layout from "components/common/Layout"
import TrackDialog from "components/dialog/TrackDialog"

const AdminAlbumEdit = (props) => {
  const { albumSeq } = props.match.params
  const [trackDialog, setTrackDialog] = useState({ open: false, data: null })
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [date, setDate] = useState("")
  const [trackList, setTrackList] = useState([])
  const [deleteList, setDeleteList] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    ;(async () => {
      const pro1 = await dbService.collection("albums").doc(albumSeq).get()
      const pro2 = await dbService.collection("tracks").where("albumSeq", "==", albumSeq).get()
      Promise.all([pro1, pro2]).then((res) => {
        const album = res[0].data()
        setFileData(album.imageUrl)
        setTitle(album.title)
        setArtist(album.artist)
        setDate(album.releaseDate)
        const tracks = res[1].docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setTrackList(tracks)
      })
    })()
  }, [])

  const onDelete = async () => {
    if (confirm("Really?")) {
      const pro1 = await dbService.collection("albums").doc(albumSeq).delete()
      const pro2 = await dbService
        .collection("tracks")
        .where("albumSeq", "==", albumSeq)
        .get()
        .then((docs) => docs.forEach((doc) => doc.ref.delete()))

      Promise.all([pro1, pro2]).then(() => history.back())
    }
  }

  const onSubmit = async () => {
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

    const pro1 = await dbService
      .collection("albums")
      .doc(albumSeq)
      .update({ imageUrl: fileUrl || fileData, title, artist, releaseDate: date })
    let pro2 = () => {}
    let pro3 = () => {}
    if (trackList.length > 0)
      pro2 = trackList.map((i) => {
        const temp = { ...i }
        if (temp.id) {
          delete temp.id
          dbService.collection("tracks").doc(i.id).update(temp)
        } else {
          dbService.collection("tracks").add({ albumSeq, ...temp, createdAt: Date.now() })
        }
      })
    if (deleteList.length > 0)
      pro3 = deleteList.map((i) => {
        if (i.id) dbService.collection("tracks").doc(i.id).delete()
      })

    Promise.all([pro1, pro2, pro3]).then(() => history.back())
  }

  return (
    <Layout>
      <TrackDialog
        open={trackDialog.open}
        onClose={() => setTrackDialog({ open: false, data: null })}
        data={trackDialog.data}
        onClickAdd={(value) => {
          const index = trackList.findIndex((i) => i.seq == value.seq)
          if (index != -1) {
            const temp = [...trackList]
            temp[index] = value
            setTrackList(temp)
          } else {
            const temp = [...trackList]
            temp.push({ ...value, seq: trackList.length > 0 ? trackList[trackList.length - 1].seq + 1 : 0 })
            setTrackList(temp)
          }
          setTrackDialog({ open: false, data: null })
        }}
      />

      <ProfileImgSection>{fileData && <img src={fileData} alt={"profile img"} />}</ProfileImgSection>

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
                }
                setFile(e.target.files[0])
                reader.readAsDataURL(e.target.files[0])
              }
            }}
          />
          <Input type="text" value={file ? file.name : fileData} readOnly />
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
            <p>DEL</p>
          </LI>

          {trackList
            .sort((a, b) => a.seq - b.seq)
            .map((i, idx) => (
              <LI key={idx}>
                <p>{idx + 1}</p>
                <p>{i.title}</p>
                <p>{i.lyrics === "" ? null : <LibraryBooksIcon />}</p>
                <p>{i.mv === "" ? null : <YouTubeIcon />}</p>
                <button onClick={() => setTrackDialog({ open: true, data: i })}>EDIT</button>
                <button
                  onClick={() => {
                    const temp = [...trackList]
                    const deleteTrack = temp.splice(idx, 1)
                    setTrackList(temp)
                    const deleteTemp = [...deleteList]
                    deleteTemp.push(...deleteTrack)
                    setDeleteList(deleteTemp)
                  }}
                >
                  DEL
                </button>
              </LI>
            ))}
        </UL>
      </TrackSection>

      <ButtonSection>
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={onSubmit}>Edit</Button>
      </ButtonSection>
    </Layout>
  )
}

export default AdminAlbumEdit

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

  &:last-child {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`
