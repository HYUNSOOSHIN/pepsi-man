import React, { useState, useCallback } from "react"
import styled from "styled-components"

export default function AdminDialog(props) {
  const { open, onClose, onClickLogin } = props
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (id === "") return alert("Enter your Id!")
      else if (pw === "") return alert("Enter your Password!")

      onClickLogin(id, pw)
    },
    [id, pw]
  )

  return (
    <Backdrop open={open} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>ADMIN LOGIN</Title>
        <form onSubmit={onSubmit}>
          <Input type="text" placeholder="EMAIL" value={id} onChange={(e) => setId(e.target.value)} />
          <Input type="password" placeholder="PASSWORD" value={pw} onChange={(e) => setPw(e.target.value)} />
          <Button type="submit" onClick={onSubmit}>
            LOGIN
          </Button>
        </form>
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
  background-color: ${(props) => props.theme.background};
  width: 300px;
  height: 250px;
  padding: 30px;
  border-radius: 6px;
`
const Title = styled.p`
  margin-bottom: 25px;
  color: ${(props) => props.theme.text};
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
