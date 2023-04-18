import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <p id={"info"}>{`Somewhere in Gwanak-gu, Seoul,  Republic of Korea.\nT: ☺☺☺-☺☺☺☺-☺☺☺☺ / E: shs0655@gmail.com`}</p>
      <p id={"copyright"}>© 2020. HYUNSOOSHIN all rights reserved.</p>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 20px 0px;
  border-top: 1px solid var(--border);
  #info {
    color: var(--text);
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    white-space: pre;
  }
  #copyright {
    margin-top: 5px;
    color: var(--text);
    font-size: 11px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    #info {
      font-size: 9px;
    }
    #copyright {
      font-size: 8px;
    }
  }
`
