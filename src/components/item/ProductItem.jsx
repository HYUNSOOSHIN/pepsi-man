import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const ProductItem = (props) => {
  const history = useHistory()
  const { productItem } = props

  return (
    <Container onClick={() => history.push(`/shop/product/${productItem.productSeq}`)}>
      <div id="imgBox">
        <img src={productItem.imageUri} alt={"앨범 이미지"} />
      </div>

      <p>{productItem.productName}</p>
      <div>
        <p id={"price"}>price: {productItem.price.toLocaleString()}</p>
      </div>
    </Container>
  )
}

export default ProductItem

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  float: left;
  width: 25%;
  height: auto;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1) !important;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    transform: translateY(-8px);
  }
  & > div#imgBox {
    position: relative;
    width: 100%;
    height: auto;
    &::after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > p {
    margin-top: 10px;
    font-size: 18px;
    text-align: left;
  }
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: fit-content;

    & > p#price {
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
