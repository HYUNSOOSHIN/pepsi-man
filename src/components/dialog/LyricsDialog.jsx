import React from "react"
import styled from "styled-components"
import { IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

export default function LyricsDialog(props) {
  const { open, onClose, track } = props

  if (Object.keys(track).length === 0) return null

  return (
    <Backdrop open={open} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <HeaderSection>
          <p>{track.title} 가사</p>
          <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </HeaderSection>
        {/* LYRICS */}
        <LyricsSection>
          <p>{track.lyrics}</p>
        </LyricsSection>
      </Container>
    </Backdrop>
  )
}

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
`

const Container = styled.div`
  background-color: var(--background);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 524px;
  height: 500px;
  border-radius: 6px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid #b6b7b8;
  & > p {
    color: var(--text);
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 15px;
    }
  }
`
const LyricsSection = styled.section`
  overflow-y: auto;
  flex: 1;
  width: 100%;
  height: fit-content;
  padding: 10px;
  & > p {
    color: var(--text);
    font-size: 15px;
    white-space: pre-line;
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 13px;
    }
  }
`
