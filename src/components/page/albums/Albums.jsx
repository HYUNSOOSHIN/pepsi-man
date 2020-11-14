import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"
import thunderbirdmotel from "./../../../images/thunderbirdmotel.jpg"

const Albums = () => {
  const history = useHistory()

  return (
    <Layout>
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* 앨범 아이템 */}
        <button
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}
          onClick={() => history.push(`/album/${1}`)}
        >
          <img style={{ width: "300px", height: "300px" }} src={thunderbirdmotel} alt={"앨범 이미지"} />
          <p style={{ marginTop: "10px", fontSize: "20px" }}>앨범이름</p>
          <p style={{ marginTop: "5px", fontSize: "15px" }}>발매날짜</p>
        </button>

        <button
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}
          onClick={() => history.push(`/album/${1}`)}
        >
          <img style={{ width: "300px", height: "300px" }} src={thunderbirdmotel} alt={"앨범 이미지"} />
          <p style={{ marginTop: "10px", fontSize: "20px" }}>앨범이름</p>
          <p style={{ marginTop: "5px", fontSize: "15px" }}>발매날짜</p>
        </button>

        <button
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}
          onClick={() => history.push(`/album/${1}`)}
        >
          <img style={{ width: "300px", height: "300px" }} src={thunderbirdmotel} alt={"앨범 이미지"} />
          <p style={{ marginTop: "10px", fontSize: "20px" }}>앨범이름</p>
          <p style={{ marginTop: "5px", fontSize: "15px" }}>발매날짜</p>
        </button>
      </div>
    </Layout>
  )
}

export default Albums
