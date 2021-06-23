import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { authService } from "../fireBase"
import Login from "./page/Login"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import Shop from "./page/shop/Shop"
import Product from "./page/shop/Product"
import Albums from "./page/albums/Albums"
import Album from "./page/albums/Album"
import MV from "./page/albums/MV"
import Talks from "./page/talks/Talks"
import Talk from "./page/talks/Talk"
import Search from "./page/talks/Search"
import Write from "./page/talks/Write"

function App() {
  const [init, setInit] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)

  React.useEffect(() => {
    // 로그인/로그아웃 감지하는 관찰자 함수
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true)
        // setUserObj({
        //   displayName: user.displayName,
        //   uid: user.uid,
        //   updateProfile: (args) => user.updateProfile(args),
        // })
      } else {
        setIsLogin(false)
      }
      setInit(true)
    })
  }, [])

  return (
    init && (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {isLogin ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/introduce" component={Introduce} />

            <Switch>
              <Route path="/shop/product/:productSeq" component={Product} />
              <Route path="/shop" component={Shop} />
            </Switch>

            <Switch>
              <Route path="/albums/:albumSeq/:trackNo" component={MV} />
              <Route path="/albums/:albumSeq" component={Album} />
              <Route path="/albums" component={Albums} />
            </Switch>

            <Switch>
              <Route path="/talks/search" component={Search} />
              <Route path="/talks/write" component={Write} />
              <Route path="/talks/:talkSeq" component={Talk} />
              <Route path="/talks" component={Talks} />
            </Switch>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Redirect from="*" to="/" />
          </>
        )}
      </BrowserRouter>
    )
  )
}

export default App
