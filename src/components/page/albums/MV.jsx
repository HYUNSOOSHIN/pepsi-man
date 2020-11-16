import { useEffect } from "react"
import ReactPlayer from "react-player/youtube"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"

const MV = (props) => {
  const { track, setTrack } = props
  const { trackNo } = props.match.params

  useEffect(() => {
    setTrack(trackNo)
  })

  if (Object.keys(track).length === 0) return null

  return (
    <Layout>
      <ReactPlayer url={track.mvUri} width={1048} height={1048 / 1.78} playing controls />
    </Layout>
  )
}

export default Container(MV)
