import React, { useState } from "react"
import styled from "styled-components"

export default function AdminDialog(props) {
  const { open, onClose, onClickLogin } = props
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")

  return (
    <Backdrop open={open} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>관리자 로그인</Title>
        <Input type="text" placeholder="이메일" value={id} onChange={(e) => setId(e.target.value)} />
        <Input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button onClick={() => onClickLogin(id, pw)}>로그인</Button>
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
  width: 300px;
  height: 250px;
  padding: 30px;
  border-radius: 6px;
`
const Title = styled.p`
  margin-bottom: 25px;
  color: var(--text);
  font-size: 20px;
  font-weight: bold;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 15px;
`
const Button = styled.button`
  background-color: #4351af;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  color: #ffffff;
  font-size: 20px;
`
