import React from "react"
import { useHistory } from "react-router-dom"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"

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
            {item}번 째 토크입니다.
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

export default TalkItem
