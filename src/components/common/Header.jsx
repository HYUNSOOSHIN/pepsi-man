import React from "react"
import styled from "styled-components"
import { Link, useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <Container>
      <LogoLink to="/">ZIOR PARK</LogoLink>
      <NaviView>
        <Link className={history.location.pathname.includes("introduce") ? "active" : ""} to="/introduce">
          Introduce
        </Link>
        <Link className={history.location.pathname.includes("new") ? "active" : ""} to="/news">
          News
        </Link>
        <Link className={history.location.pathname.includes("album") ? "active" : ""} to="/albums">
          Albums
        </Link>
        <Link className={history.location.pathname.includes("talk") ? "active" : ""} to="/talks">
          Talks
        </Link>
      </NaviView>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 0px 120px;

  @media (max-width: 1024px) {
    padding: 40px 10px 60px;
  }

  @media (max-width: 768px) {
    padding: 25px 10px 40px;
  }
`
const LogoLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--text);
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  text-decoration: none;

  &.active {
    color: #4351af;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const NaviView = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
  & > a {
    color: var(--text);
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    text-decoration: none;
  }
`
