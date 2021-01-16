import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"

const Albums = (props) => {
  const history = useHistory()
  const { albums } = props

  return (
    <Layout>
      <Section>
        {albums
          .sort((a, b) => b.albumNo - a.albumNo)
          .map((albumItem, albumIndex) => (
            <AlbumItem key={albumIndex} onClick={() => history.push(`/albums/${albumItem.albumSeq}`)}>
              <img src={albumItem.imageUri} alt={"앨범 이미지"} />
              <p>{albumItem.title}</p>
              <div>
                <p id={"artist"}>{albumItem.artist}</p>
                <p id={"releaseDate"}>{albumItem.releaseDate}</p>
              </div>
            </AlbumItem>
          ))}
      </Section>
    </Layout>
  )
}

export default Container(Albums)

const Section = styled.section`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`
const AlbumItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  float: left;
  width: 33.3%;
  height: auto;
  padding: 10px;

  & > img {
    width: 100%;
    object-fit: cover;
  }
  & > p {
    margin-top: 10px;
    font-size: 20px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 5px;
    & > p#artist {
      flex: 1;
      width: 0px;
      margin-right: 5px;
      font-size: 15px;
      text-align: left;
    }
    & > p.releaseDate {
      font-size: 15px;
    }
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
