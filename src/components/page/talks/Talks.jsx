import { useState } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"

const Talks = () => {
  const [orderBy, setOrderBy] = useState(0)

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
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
              cursor: "pointer",
              backgroundColor: orderBy === 1 ? "#646568" : "#ffffff",
              width: "80px",
              height: "35px",
              marginLeft: "-1px",
              border: orderBy === 1 ? "1px solid #ffffff" : "1px solid #dbdbdb",
              borderRadius: "5px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
            onClick={() => setOrderBy(1)}
          >
            <p style={{ color: orderBy === 1 ? "#ffffff" : "#646568", fontSize: "15px", fontWeight: "bold" }}>인기순</p>
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <button style={{ cursor: "pointer", padding: "0px" }}>
            <SearchIcon style={{ width: "30px", height: "30px" }} />
          </button>
          <button style={{ cursor: "pointer", marginLeft: "5px", padding: "0px" }}>
            <CreateIcon style={{ width: "30px", height: "30px" }} />
          </button>
        </div>
      </section>

      <section style={{ overflowY: "auto", flex: 1, marginTop: "50px" }}>
        {[1, 2, 3, 4].map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Talks

const TalkItem = (props) => {
  const history = useHistory()
  const { item } = props

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "fit-content",
        marginBottom: "30px",
      }}
    >
      <button
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "80%",
          height: "fit-content",
          padding: "0px",
          border: "1px solid #f0f0f1",
          borderRadius: "0px",
          boxShadow: "0px 3.3px 5px 0px #08000010",
          textAlign: "left",
        }}
        onClick={() => history.push(`/talk/${item}`)}
      >
        <div style={{ backgroundColor: "red", width: "200px", height: "200px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-around",
            alignContent: "center",
            width: "100%",
            height: "200px",
            padding: "10px",
          }}
        >
          <p style={{ fontSize: "18px" }}>{item}번 째 토크</p>
          <p
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              fontSize: "15px",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item}번 째 토크가 어쩌고 저쩌고
            블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignContent: "flex-end", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "flex-end" }}>
              <p style={{ fontSize: "15px" }}>
                2020-11-20 <span style={{ fontWeight: "bold" }}>신현수</span>
              </p>
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
      </button>
    </div>
  )
}
