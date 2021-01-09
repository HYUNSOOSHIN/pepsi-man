import React, { useState } from "react"
import styled from "styled-components"
import { darkColors, whiteColors } from "../../utils/util"
import Header from "./Header"
import Footer from "./Footer"

import { Switch } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const Layout = (props) => {
  const { children } = props
  const [toggle, setToggle] = useState(localStorage.getItem("darkMode") === "true")

  const setColorMode = (colorMode) => {
    for (const [key, value] of Object.entries(colorMode)) {
      document.documentElement.style.setProperty(`--${key}`, `${value}`)
    }
  }

  setColorMode(localStorage.getItem("darkMode") === "true" ? darkColors : whiteColors)

  return (
    <Container>
      <ToggleView>
        <ToggleText>다크모드</ToggleText>
        <AntSwitch
          checked={toggle}
          onChange={() => {
            setColorMode(toggle ? whiteColors : darkColors)
            setToggle(!toggle)
            localStorage.setItem("darkMode", `${!toggle}`)
          }}
          name="color_toggle"
        />
      </ToggleView>
      <Inner>
        <Header />
        <ChildView>{children}</ChildView>
        <Footer />
      </Inner>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  background-color: inherit;
  position: relative;
`
const Inner = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0px auto;

  @media (max-width: 1024px) {
    max-width: none;
  }

  @media (max-width: 768px) {
  }
`
const ToggleView = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: fit-content;
  z-index: 100;
`
const ToggleText = styled.p`
  margin-top: 2px;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`
const ChildView = styled.div`
  flex: 1;
  margin-bottom: 120px;
`

const AntSwitch = withStyles((theme) => ({
  root: {
    overflow: "visible",
    width: 28,
    height: 16,
    padding: 0,
  },
  switchBase: {
    padding: "2px",
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch)
