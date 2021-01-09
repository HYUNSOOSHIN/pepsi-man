import React from "react"
import styled from "styled-components"
import Layout from "../common/Layout"
import zior from "./../../images/zior.png"
import instagram from "./../../images/instagram.png"
import youtube from "./../../images/youtube.png"
import soundcloud from "./../../images/soundcloud.png"

const Introduce = () => {
  const profileInfo = [
    { key: "이름", value: "Zior Park" },
    { key: "국적", value: "신드롬 행성" },
    { key: "생년월일", value: "☺☺☺☺-☺☺-☺☺" },
    { key: "데뷔", value: "2018년 싱글 Benefits" },
    { key: "크루", value: "SyndromeZ" },
    { key: "레이블", value: "Beautiful Noise" },
  ]

  return (
    <Layout>
      {/* 프로필 이미지 */}
      <ProfileImgSection>
        <img src={zior} alt={"profile img"} />
      </ProfileImgSection>

      {/* 프로필 */}
      <ProfileSection>
        <Title>PROFILE</Title>
        <ContentBox>
          {profileInfo.map((info, infoIndex) => (
            <div key={infoIndex} className={"profile"}>
              <p>{info.key}</p>
              <p>{info.value}</p>
            </div>
          ))}
        </ContentBox>
      </ProfileSection>

      {/* SNS */}
      <SNSSection>
        <Title>SNS</Title>
        <ContentBox>
          <div className={"sns"}>
            <a target={"_blank"} rel={"noreferrer"} href={"https://www.instagram.com/ziorpark/"}>
              <img src={instagram} alt={"instagram logo"} />
            </a>
            <a target={"_blank"} rel={"noreferrer"} href={"https://www.youtube.com/channel/UCFPCZLYfZj0Ehu2it-HuQiQ"}>
              <img src={youtube} alt={"youtube logo"} />
            </a>
            <a target={"_blank"} rel={"noreferrer"} href={"https://soundcloud.com/ziorpark"}>
              <img src={soundcloud} alt={"soundcloud logo"} />
            </a>
          </div>
        </ContentBox>
      </SNSSection>
    </Layout>
  )
}

export default Introduce

const ProfileImgSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > img {
    width: 524px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    & > img {
      width: 90%;
      max-width: 524px;
    }
  }
`
const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const SNSSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const ContentBox = styled.div`
  width: 350px;
  height: fit-content;
  margin-top: 20px;
  & > div.profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
    & > p {
      flex: 1;
      font-size: 18px;
    }
  }
  & > div.sns {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > a {
      padding: 5px;
      & > img {
        width: 40px;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
    & > div.profile > p {
      font-size: 14px;
    }
  }
`
