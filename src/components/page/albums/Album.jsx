import { useState } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"
import LyricsDialog from "../../dialog/LyricsDialog"
import thunderbirdmotel from "./../../../images/thunderbirdmotel.jpg"

import { IconButton } from "@material-ui/core"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import YouTubeIcon from "@material-ui/icons/YouTube"

const Album = (props) => {
  const history = useHistory()
  const { match } = props
  const [lyricsDialog, setLyricsDialog] = useState(false)

  console.log(match.params.albumSeq)

  return (
    <Layout>
      <LyricsDialog open={lyricsDialog} onClose={() => setLyricsDialog(false)} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "524px", objectFit: "cover" }} src={thunderbirdmotel} alt={"앨범 이미지"} />
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
            <tr>
              <td style={{ width: "30px", fontSize: "15px", textAlign: "center" }}>1</td>
              <td style={{ flex: 1, fontSize: "15px" }}>THUNDERBIRD</td>
              <td style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>
                <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => setLyricsDialog(true)}>
                  <LibraryBooksIcon />
                </IconButton>
              </td>
              <td style={{ width: "50px", fontSize: "15px", textAlign: "center" }}>
                <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => history.push("/album/1/MV")}>
                  <YouTubeIcon />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Album
