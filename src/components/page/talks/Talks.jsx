import { useState } from "react"
import Layout from "../../common/Layout"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"

const Talks = () => {
  const [orderBy, setOrderBy] = useState(0)

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "flex-start", alignContent: "center" }}>
        <button
          style={{
            backgroundColor: orderBy === 0 ? "#646568" : "#ffffff",
            width: "80px",
            height: "35px",
            border: orderBy === 0 ? "1px solid #ffffff" : "1px solid #dbdbdb",
            borderRadius: "5px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            cursor: "pointer",
          }}
          onClick={() => setOrderBy(0)}
        >
          <p style={{ color: orderBy === 0 ? "#ffffff" : "#646568", fontSize: "15px", fontWeight: "bold" }}>최신순</p>
        </button>
        <button
          style={{
            backgroundColor: orderBy === 1 ? "#646568" : "#ffffff",
            width: "80px",
            height: "35px",
            marginLeft: "-1px",
            border: orderBy === 1 ? "1px solid #ffffff" : "1px solid #dbdbdb",
            borderRadius: "5px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            cursor: "pointer",
          }}
          onClick={() => setOrderBy(1)}
        >
          <p style={{ color: orderBy === 1 ? "#ffffff" : "#646568", fontSize: "15px", fontWeight: "bold" }}>인기순</p>
        </button>
      </section>

      <section style={{ overflowY: "auto", display: "flex", flex: 1, flexWrap: "wrap", marginTop: "20px" }}>
        {[1, 2, 3, 4].map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Talks

const TalkItem = (props) => {
  const { item } = props

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 1048 / 3,
        height: "fit-content",
        marginBottom: "30px",
      }}
    >
      <div style={{ border: "1px solid #f0f0f1", borderRadius: "0px", boxShadow: "0px 3.3px 5px 0px #08000010" }}>
        <div style={{ backgroundColor: "red", width: 1048 / 3 - 20, height: 1048 / 3 - 20 }} />
        <div style={{ padding: "10px" }}>
          <p style={{ fontSize: "18px" }}>{item}번 째 토크</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", marginTop: "10px" }}>
            <p style={{ fontSize: "15px" }}>신현수</p>
            <p style={{ fontSize: "15px" }}>2020-11-20</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", alignContent: "center", marginTop: "10px" }}>
            <FindInPageIcon style={{ width: "15px", height: "15px" }} />
            <p style={{ margin: "0px 5px", fontSize: "10px", lineHeight: "15px" }}>3</p>
            <FavoriteIcon style={{ width: "15px", height: "15px" }} />
            <p style={{ margin: "0px 5px", fontSize: "10px", lineHeight: "15px" }}>2</p>
            <CommentIcon style={{ width: "15px", height: "15px" }} />
            <p style={{ margin: "0px 5px", fontSize: "10px", lineHeight: "15px" }}>3</p>
          </div>
        </div>
      </div>
    </div>
  )
}
