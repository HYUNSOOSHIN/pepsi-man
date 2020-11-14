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
  const { open, onClose } = props

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
          <p style={{ color: "#222222", fontSize: "20px", fontWeight: "bold" }}>{`THUNDERBIRD`} 가사</p>
          <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </section>
        <section style={{ overflowY: "auto", flex: 1, width: "100%", height: "fit-content", padding: "10px" }}>
          <p style={{ color: "#222222", fontSize: "15px", whiteSpace: "pre-line" }}>
            {`Look at there new THUNDER falls
          Look at there new rain pours
          Who’s there man god or ghost
          No need to pray only drugs
          Obsession about my dream
          It’s going lunatic
          like a Louis the 14th
          My mental’s like a Versailles I built
          Shadow’s so dark for light
          My palace is occupied
          By old smell dogs it’s time for hound
          When it’s over this testing time
          I’m looking for land to die
          A bird on a tree you know how I feel
          A white oak tree you know how I feel
          Why I’m still here I made
          my mind to leave here
          Sweet my Jesus am I still your sheep
          There’s a bird on a oak tree
          they’re both crying for awhile
          There’s a boy watching them
          thru a lil scope for awhile
          There’s a bird on a oak tree
          they’re both crying for awhile
          There’s a boy watching them
          thru a lil scope for awhile
          Somewhere over
          the thunder way up high
          There’s a land that
          I heard of once in a lullaby
          Somewhere over
          the thunder way up high
          There’s a land that
          I heard of once in a lullaby
          `}
          </p>
        </section>
      </div>
    </Dialog>
  )
}
