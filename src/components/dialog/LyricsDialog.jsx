import React from "react"

import { Dialog, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles(() => ({
  container: {
    "& .MuiPaper-root": {
      minWidth: "514px",
    },
  },
}))

export default function LyricsDialog(props) {
  const classes = useStyles()
  const { open, onClose, track } = props

  if (Object.keys(track).length === 0) return null

  return (
    <Dialog className={classes.container} open={open} onClose={onClose}>
      <div
        style={{
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "500px",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "60px",
            padding: "10px",
            borderBottom: "1px solid #b6b7b8",
          }}
        >
          <p style={{ color: "#222222", fontSize: "20px", fontWeight: "bold" }}>{track.title} 가사</p>
          <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </section>
        <section style={{ overflowY: "auto", flex: 1, width: "100%", height: "fit-content", padding: "10px" }}>
          <p style={{ color: "#222222", fontSize: "15px", whiteSpace: "pre-line" }}>{track.lyrics}</p>
        </section>
      </div>
    </Dialog>
  )
}
