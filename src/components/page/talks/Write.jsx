import { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"

import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

const Write = () => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  // 이미지 형식 {base64: null, file: null}
  const [images, setImages] = useState([])
  const imageInput = useRef(null)

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  return (
    <Layout>
      <section style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <input
          type={"text"}
          style={{ width: "100%", height: "40px", padding: "5px 10px", fontSize: "20px" }}
          placeholder={"제목"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type={"file"}
          style={{ width: "100%", height: "400px", marginTop: "20px", padding: "5px 10px", fontSize: "20px" }}
          placeholder={"내용"}
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></textarea>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%", height: "fit-content" }}>
          <p style={{ color: contents.length > 500 ? "red" : null }}>{contents.length}/500</p>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", marginTop: "20px" }}>
        <input
          ref={imageInput}
          style={{ display: "none" }}
          type={"file"}
          onChange={async (e) => {
            if (e.target.files.length === 0) return
            const file = e.target.files[0]
            const base64 = await toBase64(file)
            console.log([...images, { base64, file }])
            setImages([...images, { base64, file }])
          }}
          accept={"image/*"}
        />
        <button
          style={{ width: "fit-content", height: "fit-content", marginRight: "20px", padding: "5px", border: "1px solid", borderRadius: "5px" }}
          onClick={() => {
            if (images.length === 3) alert("이미지는 최대 3개만 가능합니다.")
            else imageInput.current.click()
          }}
        >
          <p>이미지 추가</p>
        </button>

        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          {images.map((i, idx) => (
            <div key={idx} style={{ position: "relative", width: "150px", height: "150px", marginRight: "10px" }}>
              <img style={{ width: "150px", height: "150px", borderRadius: "10px", objectFit: "cover" }} src={i.base64} alt={`추가 이미지${idx}`} />
              <button style={{ backgroundColor: "#00000000", position: "absolute", top: "5px", right: "5px", padding: "0px" }}>
                <RemoveCircleIcon style={{ color: "#000000" }} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
        <button
          style={{ width: "fit-content", height: "fit-content", marginRight: "10px", padding: "10px", border: "1px solid", borderRadius: "5px" }}
          onClick={() => history.goBack()}
        >
          <p style={{ fontSize: "20px" }}>취소</p>
        </button>
        <button
          style={{ width: "fit-content", height: "fit-content", padding: "10px", border: "1px solid", borderRadius: "5px" }}
          onClick={() => alert("구현중인 기능입니다.")}
        >
          <p style={{ fontSize: "20px" }}>작성완료</p>
        </button>
      </section>
    </Layout>
  )
}

export default Write
