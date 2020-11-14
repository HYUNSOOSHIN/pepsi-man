import ReactPlayer from "react-player/youtube"
import Layout from "../../common/Layout"

const MV = () => {
  return (
    <Layout>
      <ReactPlayer url="https://www.youtube.com/watch?v=yDC_qKBHx-k" width={1048} height={1048 / 1.78} playing controls />
    </Layout>
  )
}

export default MV
