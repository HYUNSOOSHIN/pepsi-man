import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { authService } from "../fireBase"
import { useSelector } from "react-redux"
// 페이지
import Login from "./page/Login"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import Photos from "./page/photos/Photos"
import Albums from "./page/albums/Albums"
import Album from "./page/albums/Album"
import MV from "./page/albums/MV"
import Talks from "./page/talks/Talks"
import Talk from "./page/talks/Talk"
import Search from "./page/talks/Search"
import Write from "./page/talks/Write"
// 관리자 페이지
import Admin from "./page/admin"
import AdminIntroduce from "./page/admin/Introduce"
import AdminPhotos from "./page/admin/Photos"
import AdminAlbums from "./page/admin/Albums"
import AdminTalks from "./page/admin/Talks"

function App() {
  const { user } = useSelector((state) => state.reducer)
  const [init, setInit] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    // 로그인/로그아웃 감지하는 관찰자 함수
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true)
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

            <Route path="/photos" component={Photos} />

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

            {user.email?.includes("admin") && (
              <Switch>
                <Route exact path="/admin" component={Admin} />
                <Route path="/admin/introduce" component={AdminIntroduce} />
                <Route path="/admin/photos" component={AdminPhotos} />
                <Route path="/admin/albums" component={AdminAlbums} />
                <Route path="/admin/talks" component={AdminTalks} />
              </Switch>
            )}
          </>
        ) : (
          <>
            <Route strict path="/" component={Login} />
          </>
        )}
      </BrowserRouter>
    )
  )
}

export default App
