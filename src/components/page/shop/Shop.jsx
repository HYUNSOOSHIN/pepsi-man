import React from "react"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import ProductItem from "../../item/ProductItem"

const Shop = (props) => {
  const { products } = props

  return (
    <Layout>
      <Section>
        {products.map((productItem, productIndex) => (
          <ProductItem key={productIndex} productItem={productItem} />
        ))}
      </Section>
    </Layout>
  )
}

export default Container(Shop)

const Section = styled.section`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`
