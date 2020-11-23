import Layout from "../../common/Layout"

const Talk = (props) => {
  const { talkSeq } = props.match.params

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80%", height: "fit-content" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "fit-content" }}>
            <p style={{ fontSize: "15px" }}>{talkSeq}번째 토크</p>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <p style={{ fontSize: "15px" }}>
                <span style={{ fontWeight: "bold" }}>글쓴이</span> 작성시간
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

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "30px 0px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "80%", height: "fit-content" }}>
          <button
            style={{ cursor: "pointer", width: "fit-content", height: "35px", border: "1px solid #dbdbdb", borderRadius: "5px" }}
            onClick={() => window.history.back()}
          >
            목록으로
          </button>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "80%", height: "fit-content" }}>
          <div>댓글 입력</div>
          <div style={{ backgroundColor: "#dbdbdb", width: "100%", height: "100px" }}>댓글 리스트</div>
        </div>
      </section>
    </Layout>
  )
}

export default Talk
