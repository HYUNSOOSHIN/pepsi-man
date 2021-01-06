import React from "react"
import { useHistory } from "react-router-dom"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"

const Albums = props => {
  const history = useHistory()
  const { albums } = props

  const renderAlbums = () => {
    if (albums === undefined) return

    let innerDiv = []
    const div = []

    albums
      .sort((a, b) => b.albumNo - a.albumNo)
      .forEach((i, idx) => {
        innerDiv.push(
          <button
            key={idx}
            style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}
            onClick={() => history.push(`/album/${i.albumSeq}`)}
          >
            <img style={{ width: "300px", height: "300px" }} src={i.imageUri} alt={"앨범 이미지"} />
            <p style={{ marginTop: "10px", fontSize: "20px" }}>{i.title}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                marginTop: "5px",
              }}
            >
              <p
                style={{
                  flex: 1,
                  width: "0px",
                  marginRight: "5px",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                {i.artist}
              </p>
              <p style={{ fontSize: "15px" }}>{i.releaseDate}</p>
            </div>
          </button>
        )

        if (albums.length - 1 === idx && innerDiv.length < 3) {
          for (let j = 0; j < innerDiv.length % 3; j++) {
            innerDiv.push(<div key={"empty" + j} style={{ width: "300px", height: "auto" }}></div>)
          }
        }

        if (innerDiv.length === 3) {
          div.push(
            <div
              key={"div" + idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                marginBottom: albums.length - 1 === idx ? "0px" : "30px",
              }}
            >
              {innerDiv}
            </div>
          )
          innerDiv = []
        }
      })

    return div
  }

  return (
    <Layout>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {renderAlbums()}
      </section>
    </Layout>
  )
}

export default Container(Albums)
