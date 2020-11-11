import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
  const { children } = props

  return (
    <div id={"container"}>
      <div id={"toggle_view"}>
        <p>다크모드</p>토글버튼
      </div>
      <Header />
      <div id={"page"}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
