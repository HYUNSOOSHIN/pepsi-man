import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const AlbumItem = (props) => {
  const history = useHistory()
  const { albumItem } = props

  return (
    <Container onClick={() => history.push(`/albums/${albumItem.albumSeq}`)}>
      <img src={albumItem.imageUri} alt={"앨범 이미지"} />
      <p>{albumItem.title}</p>
      <div>
        <p id={"artist"}>{albumItem.artist}</p>
        <p id={"releaseDate"}>{albumItem.releaseDate}</p>
      </div>
    </Container>
  )
}

export default AlbumItem

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  float: left;
  width: 33.3%;
  height: auto;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1) !important;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    transform: translateY(-8px);
  }

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
    &:hover {
      box-shadow: 0 0 0 transparent !important;
      transition: none;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
