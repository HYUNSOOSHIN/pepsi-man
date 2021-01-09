import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import LyricsDialog from "../../dialog/LyricsDialog"

import { IconButton } from "@material-ui/core"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import YouTubeIcon from "@material-ui/icons/YouTube"

const Album = (props) => {
  const history = useHistory()
  const { album, setAlbum } = props
  const { albumSeq } = props.match.params
  const [lyricsDialog, setLyricsDialog] = useState({ open: false, track: {} })

  useEffect(() => {
    setAlbum(albumSeq)
  })

  if (Object.keys(album).length === 0) return null

  return (
    <Layout>
      <LyricsDialog open={lyricsDialog.open} onClose={() => setLyricsDialog({ open: false, track: {} })} track={lyricsDialog.track} />
      <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "524px", objectFit: "cover" }} src={album.imageUri} alt={"앨범 이미지"} />
        <table style={{ width: "524px", height: "fit-content", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>번호</th>
              <th style={{ flex: 1, fontSize: "15px", textAlign: "left" }}>곡정보</th>
              <th style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>가사</th>
              <th style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>뮤비</th>
            </tr>
          </thead>
          <tbody>
            {album.track.map((i, idx) => (
              <tr key={idx}>
                <td style={{ width: "30px", fontSize: "15px", textAlign: "center" }}>{i.trackNo}</td>
                <td style={{ flex: 1, fontSize: "15px" }}>{i.title}</td>
                <td style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>
                  <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => setLyricsDialog({ open: true, track: i })}>
                    <LibraryBooksIcon />
                  </IconButton>
                </td>
                <td style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>
                  {i.mvUri === "" ? null : (
                    <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => history.push(`/album/${albumSeq}/MV/${i.trackNo}`)}>
                      <YouTubeIcon />
                    </IconButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export default Container(Album)
