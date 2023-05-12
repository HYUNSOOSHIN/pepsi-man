import React from "react"
import styled from "styled-components"
import { Switch } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { setDarkmode } from "redux/modules/config"

const Toggle = () => {
  const dispatch = useDispatch()
  const { darkmode } = useSelector((state) => state.configReducer)

  return (
    <ToggleView>
      <ToggleText>DarkMode</ToggleText>
      <AntSwitch checked={darkmode} onChange={() => dispatch(setDarkmode(!darkmode))} name="color_toggle" />
    </ToggleView>
  )
}

const ToggleView = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: fit-content;
  z-index: 100;
`
const ToggleText = styled.p`
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
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

export default Toggle
