import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { dbService } from "../../../fireBase"
import Layout from "../../common/Layout"

const MV = (props) => {
  const { trackSeq } = props.match.params
  const [track, setTrack] = useState({})

  useEffect(() => {
    ;(async () => {
      const result = await dbService.collection("tracks").doc(trackSeq).get()
      setTrack(result.data())
    })()
  }, [])

  return (
    <Layout>
      <PlayerSection>
        {track?.mv && (
          <iframe
            width="1280"
            height="720"
            src={"https://www.youtube.com/embed/" + track.mv}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </PlayerSection>
    </Layout>
  )
}

export default MV

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
