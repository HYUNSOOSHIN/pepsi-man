import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"

const Product = (props) => {
  const { productSeq } = props.match.params
  const { product, setProduct } = props
  const history = useHistory()

  React.useEffect(() => {
    setProduct(productSeq)
  }, [])

  if (Object.keys(product).length === 0) return null

  return (
    <Layout>
      <Section>
        <ImgBox>
          <img src={product.imageUri} alt={"앨범 이미지"} />
        </ImgBox>

        <div className="productInfo">
          <p className="name">ZIORPARK's {product.productName}</p>
          <p className="description">{product.productDescription}</p>
          <p className="price">Price is {product.price.toLocaleString()}</p>
        </div>

        <div className="buttonBox">
          <Button onClick={() => alert("This is a feature under development")}>Add to CartList</Button>
          <Button onClick={() => alert("This is a feature under development")}>Buy!</Button>
        </div>
      </Section>
    </Layout>
  )
}

export default Container(Product)

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div.productInfo {
    width: 524px;
    & > p.name {
      margin-top: 20px;
      font-size: 23px;
    }
    & > p.description {
      margin-top: 20px;
      font-size: 18px;
    }
    & > p.price {
      margin-top: 20px;
      font-size: 20px;
      text-align: right;
    }
  }
  & > div.buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1024px) {
    & > div.productInfo,
    div.buttonBox {
      width: 90%;
      max-width: 524px;
    }
  }

  @media (max-width: 768px) {
  }
`
const ImgBox = styled.div`
  position: relative;
  width: 524px;
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

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`
const Button = styled.button`
  /* width: 80px; */
  height: fit-content;
  padding: 5px 15px;
  border: 1px solid;
  border-radius: 10px;
  &:last-child {
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`
