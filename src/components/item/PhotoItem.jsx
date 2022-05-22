import React from "react"
import styled from "styled-components"

const PhotoItem = (props) => {
  const { img, onClick } = props

  return (
    <Container onClick={onClick}>
      <img src={img} alt={"사진"} />
    </Container>
  )
}

export default PhotoItem

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

  @media (max-width: 1024px) {
    padding: 5px;
    &:hover {
      box-shadow: 0 0 0 transparent !important;
      transition: none;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding: 3px;
  }
`
