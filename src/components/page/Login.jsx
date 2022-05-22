import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"
import { darkColors, whiteColors } from "../../utils/color"
import { authService, firebaseInstance } from "../../fireBase"
import Toggle from "../common/Toggle"
import zior from "images/zior.png"

const Login = () => {
  const [toggle, setToggle] = useState(localStorage.getItem("darkMode") === "true")

  const setColorMode = (colorMode) => {
    for (const [key, value] of Object.entries(colorMode)) {
      document.documentElement.style.setProperty(`--${key}`, `${value}`)
    }
  }

  setColorMode(localStorage.getItem("darkMode") === "true" ? darkColors : whiteColors)

  const onClickLogin = () => {
    authService
      .signInAnonymously()
      .then((a) => {
        console.log(a)
      })
      .catch((err) => console.log(err))
  }

  const onClickSocilLogin = async (event) => {
    const name = event.target.name

    let provider
    if (name === "google") {
      provider = new firebaseInstance.default.auth.GoogleAuthProvider()
    } else if (name === "github") {
      provider = new firebaseInstance.default.auth.GithubAuthProvider()
    }

    const data = await authService.signInWithPopup(provider)
    console.log(data)
  }

  return (
    <Container>
      <Toggle
        value={toggle}
        setValue={() => {
          const bool = !toggle
          setColorMode(toggle ? whiteColors : darkColors)
          setToggle(bool)
          localStorage.setItem("darkMode", `${bool}`)
        }}
      />

      <InputView>
        <Title>PepSiMan</Title>
        <Img src={zior} alt="loginImage" />
        <Button onClick={onClickLogin}>Anonymously Login</Button>
        <Button name="google" onClick={onClickSocilLogin}>
          Continue with google <FontAwesomeIcon icon={faGoogle} />
        </Button>
        <Button name="github" onClick={onClickSocilLogin}>
          Continue with github <FontAwesomeIcon icon={faGithub} />
        </Button>
      </InputView>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const InputView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.5px;
`
const Img = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 3px;
`
const Button = styled.button`
  width: 300px;
  height: 35px;
  margin-bottom: 10px;
  border: 1px solid var(--border);
`

export default Login
