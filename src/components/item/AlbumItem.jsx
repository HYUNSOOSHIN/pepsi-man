import React from "react"
import styled from "styled-components"

const AlbumItem = (props) => {
  const { albumItem, onClick } = props

  return (
    <Container onClick={onClick}>
      <div className="img-view">{albumItem.imageUrl && <img src={albumItem.imageUrl} alt={"album image"} />}</div>
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

  & > .img-view {
    position: relative;
    width: 100%;

    &::after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    & > p#releaseDate {
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
