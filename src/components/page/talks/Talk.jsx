import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"

import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"

const Talk = (props) => {
  const { talkSeq } = props.match.params
  const history = useHistory()
  const [comment, setComment] = useState("")

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80%", height: "fit-content" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "fit-content" }}>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>{talkSeq}번째 토크</p>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <p style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "bold" }}>익명{talkSeq}</span> 작성시간
              </p>
            </div>
          </div>

          {/* 이미지 대체 */}
          <div style={{ backgroundColor: "red", width: "524px", height: "524px", margin: "30px 0px" }}></div>

          <p style={{ width: "100%", height: "fit-content", fontSize: "15px" }}>
            {talkSeq}번 째 토크가 어쩌고 저쩌고
            블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
          </p>
        </div>
      </section>

      <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "30px 0px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", height: "fit-content", marginTop: "10px" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              height: "fit-content",
              padding: "5px",
              border: "1px solid",
              borderRadius: "5px",
            }}
            onClick={() => alert("아직 구현되지 않은 기능압니다.")}
          >
            <FavoriteIcon style={{ width: "24px", height: "24px", padding: "0px" }} />
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", alignContent: "center", width: "80%", height: "fit-content", marginTop: "10px" }}>
          <FindInPageIcon style={{ width: "20px", height: "20px" }} />
          <p style={{ margin: "0px 5px", fontSize: "12px", lineHeight: "20px" }}>3</p>
          <FavoriteIcon style={{ width: "20px", height: "20px" }} />
          <p style={{ margin: "0px 5px", fontSize: "12px", lineHeight: "20px" }}>2</p>
          <CommentIcon style={{ width: "20px", height: "20px" }} />
          <p style={{ margin: "0px 5px", fontSize: "12px", lineHeight: "20px" }}>3</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "80%", height: "fit-content", marginTop: "10px" }}>
          <button style={{ width: "fit-content", height: "35px", border: "1px solid", borderRadius: "5px" }} onClick={() => history.goBack()}>
            목록으로
          </button>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "80%", height: "fit-content" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <input
              type={"text"}
              style={{ flex: 1, width: "100%", height: "40px", padding: "5px 10px" }}
              placeholder={"코멘트를 입력하세요"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              style={{ width: "fit-content", height: "40px", marginLeft: "-1px", border: "1px solid" }}
              onClick={() => alert("아직 구현되지 않은 기능입니다.")}
            >
              <p>작성</p>
            </button>
          </div>

          <div style={{ width: "100%", height: "fit-content" }}>
            <div style={{ marginTop: "10px", padding: "5px", border: "1px solid" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <p style={{ marginRight: "5px", fontSize: "15px" }}>익명1</p>
                <p style={{ fontSize: "12px" }}>작성시간</p>
              </div>

              <p style={{ fontSize: "15px", whiteSpace: "pre-line" }}>내용 블라블라~~</p>
            </div>
            <div style={{ marginTop: "10px", padding: "5px", border: "1px solid" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <p style={{ marginRight: "5px", fontSize: "15px" }}>익명5</p>
                <p style={{ fontSize: "12px" }}>작성시간</p>
              </div>

              <p style={{ fontSize: "15px", whiteSpace: "pre-line" }}>내용 블라블라~~</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Talk
