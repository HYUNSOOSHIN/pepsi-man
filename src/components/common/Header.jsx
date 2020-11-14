import { Link, useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <header>
      <Link to="/">ZIOR PARK</Link>
      <div>
        <Link className={history.location.pathname === "/introduce" ? "active" : ""} to="/introduce">
          Introduce
        </Link>
        <Link className={history.location.pathname === "/news" ? "active" : ""} to="/news">
          News
        </Link>
        <Link className={history.location.pathname === "/albums" ? "active" : ""} to="/albums">
          Albums
        </Link>
        <Link className={history.location.pathname === "/talks" ? "active" : ""} to="/talks">
          Talks
        </Link>
      </div>
    </header>
  )
}

export default Header
