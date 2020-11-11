import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">ZIOR PARK</Link>
      <div>
        <Link to="/introduce">Introduce</Link>
        <Link to="/news">News</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/talk">Talk</Link>
        {/* <Link to="/admin" >
          Admin
        </Link> */}
      </div>
    </header>
  )
}

export default Header
