import { useState } from "react"
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
    <div id={"container"}>
      <div id={"toggle_view"}>
        <p style={{ fontWeight: "bold" }}>다크모드</p>
        <AntSwitch
          checked={toggle}
          onChange={() => {
            setColorMode(toggle ? whiteColors : darkColors)
            setToggle(!toggle)
            localStorage.setItem("darkMode", `${!toggle}`)
          }}
          name="color_toggle"
        />
      </div>
      <Header />
      <div id={"page"}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

const AntSwitch = withStyles((theme) => ({
  root: {
    overflow: "visible",
    width: 28,
    height: 16,
    padding: 0,
  },
  switchBase: {
    padding: "3px 2px",
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
