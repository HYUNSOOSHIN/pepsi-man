import React, { useEffect } from "react"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"

const MV = (props) => {
  const { setAlbum, track, setTrack } = props
  const { albumSeq, trackNo } = props.match.params

  useEffect(() => {
    setAlbum(albumSeq)
    setTrack(trackNo)
  })

  if (Object.keys(track).length === 0) return null

  return (
    <Layout>
      <PlayerSection>
        <iframe
          width="1280"
          height="720"
          src={track.mvUri}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </PlayerSection>
    </Layout>
  )
}

export default Container(MV)

const PlayerSection = styled.section`
  position: relative;
  height: 0;
  padding-top: 56.25%;
  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
