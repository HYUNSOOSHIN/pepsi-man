import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
  const { children } = props
  const [hamberger, setHamberger] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", preventScroll)

    return () => {
      window.removeEventListener("scroll", preventScroll)
    }
  }, [hamberger])

  const preventScroll = () => {
    if (hamberger) {
      document.getElementsByTagName("html")[0].scrollTop = 0
    }
  }

  return (
    <Container hamberger={hamberger}>
      <Inner>
        <Header hamberger={hamberger} setHamberger={setHamberger} />
        <ChildView>{children}</ChildView>
        <Footer />
      </Inner>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  background-color: var(--background);
  /* overflow-y: ${(props) => (props.hamberger ? "hidden" : "auto")}; */
  position: relative;
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0px auto;

  @media (max-width: 1024px) {
    max-width: none;
  }

  @media (max-width: 768px) {
  }
`
const ChildView = styled.div`
  flex: 1;
  margin: 100px 0;
  @media (max-width: 1024px) {
    margin: 70px 0;
  }

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`
