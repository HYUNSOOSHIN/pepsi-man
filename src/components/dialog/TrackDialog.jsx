import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default function TrackDialog(props) {
  const { open, onClose, data, onClickAdd } = props
  const [title, setTitle] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [mv, setMv] = useState("")

  useEffect(() => {
    if (open == false) {
      initState()
    } else {
      setTitle(data?.title || "")
      setLyrics(data?.lyrics || "")
      setMv(data?.mv || "")
    }
  }, [open])

  const initState = () => {
    setTitle("")
    setLyrics("")
    setMv("")
  }

  return (
    <Backdrop open={open} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <TitleText>Track {data ? "Edit" : "Add"}</TitleText>
        <InputView>
          <Label>Title</Label>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputView>
        <InputView>
          <Label>Lyrics</Label>
          <TextArea type="text" value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
        </InputView>
        <InputView>
          <Label>MV URL</Label>
          <Input type="text" value={mv} onChange={(e) => setMv(e.target.value)} />
        </InputView>

        <FlexCenterView>
          <AddButton onClick={() => onClickAdd({ ...data, title, lyrics, mv })}>{data ? "Edit" : "Add"}</AddButton>
        </FlexCenterView>
      </Container>
    </Backdrop>
  )
}

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
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
  position: relative;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 524px;
  height: 524px;
  padding: 30px;
  border-radius: 6px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 90%;
    /* max-width: 524px; */
  }
`

const TitleText = styled.p`
  margin-bottom: 25px;
  color: var(--text);
  font-size: 20px;
  font-weight: bold;
`

const InputView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Label = styled.label`
  flex-shrink: 0;
  width: 120px;
  font-size: 18px;
`

const Input = styled.input`
  flex: 1;
  height: 40px;
`

const TextArea = styled.textarea`
  flex: 1;
  height: 200px;
  resize: none;
`

const FlexCenterView = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`

const AddButton = styled.button`
  background-color: #4351af;
  flex-shrink: 0;
  width: 80px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-family: "Noto Sans KR";
  white-space: nowrap;
`
