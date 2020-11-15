import { Link, useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <header>
      <Link to="/">ZIOR PARK</Link>
      <div>
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
      </div>
    </header>
  )
}

export default Header
