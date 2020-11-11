import Layout from "../common/Layout"

import zior from "./../../images/zior.jpg"
import instagram from "./../../images/instagram.png"
import youtube from "./../../images/youtube.png"
import soundcloud from "./../../images/soundcloud.png"

const Introduce = () => {
  return (
    <Layout>
      {/* 프로필 이미지 */}
      <section
        id={"intro_image"}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img style={{ width: "524px", objectFit: "cover" }} src={zior} alt={"profile img"} />
      </section>

      {/* 프로필 */}
      <section
        id={"intro_profile"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ color: "#000000", fontSize: "20px", fontWeight: "bold" }}>PROFILE</p>
        </div>

        <div style={{ width: "393px", height: "fit-content", marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>이름</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>Zior Park</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>국적</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>신드롬 행성</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>생년월일</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>☺☺☺☺-☺☺-☺☺</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>데뷔</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>2018년 싱글 Benefits</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>크루</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>Filot Club</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>레이블</p>
            <p style={{ flex: 1, color: "#000000", fontSize: "18px" }}>Beautiful Noise</p>
          </div>
        </div>
      </section>

      {/* SNS */}
      <section
        id={"intro_sns"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ color: "#000000", fontSize: "20px", fontWeight: "bold" }}>SNS</p>
        </div>

        <div
          style={{
            width: "393px",
            height: "fit-content",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a target={"_blank"} rel={"noreferrer"} href={"https://www.instagram.com/ziorpark/"}>
              <img
                style={{ width: "40px", objectFit: "cover" }}
                src={instagram}
                alt={"instagram logo"}
              />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://www.youtube.com/channel/UCFPCZLYfZj0Ehu2it-HuQiQ"}
            >
              <img
                style={{ width: "40px", objectFit: "cover" }}
                src={youtube}
                alt={"youtube logo"}
              />
            </a>
            <a target={"_blank"} rel={"noreferrer"} href={"https://soundcloud.com/ziorpark"}>
              <img
                style={{ width: "40px", objectFit: "cover" }}
                src={soundcloud}
                alt={"soundcloud logo"}
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Introduce
