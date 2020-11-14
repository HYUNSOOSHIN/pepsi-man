import Layout from "../../common/Layout"

const Album = (props) => {
  const { match } = props
  console.log(match.params.albumSeq)
  return (
    <Layout>
      <div>앨범상세다</div>
    </Layout>
  )
}

export default Album
