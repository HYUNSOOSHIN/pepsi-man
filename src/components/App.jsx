import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { authService } from "../fireBase"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import { darkTheme, whiteTheme } from "utils/theme"
import { GlobalStyle } from "./styled/GlobalStyle"
// 사용자 페이지
import Login from "./page/Login"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import Photos from "./page/photos"
import Albums from "./page/albums"
import Album from "./page/albums/Album"
import MV from "./page/albums/MV"
import Talks from "./page/talks"
import Talk from "./page/talks/Talk"
import Search from "./page/talks/Search"
import Write from "./page/talks/Write"
import Edit from "./page/talks/Edit"
// 관리자 페이지
import Admin from "./page/admin"
import AdminIntroduce from "./page/admin/introduce"
import AdminPhotos from "./page/admin/photos"
import AdminAlbums from "./page/admin/albums"
import AdminAlbumAdd from "./page/admin/albums/Add"
import AdminAlbumEdit from "./page/admin/albums/Edit"
import AdminTalks from "./page/admin/talks"

function App() {
  const { darkmode } = useSelector((state) => state.configReducer)
  const { user } = useSelector((state) => state.userReducer)
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
        <ThemeProvider theme={darkmode ? darkTheme : whiteTheme}>
          <GlobalStyle />

          {isLogin ? (
            <>
              <Route exact path="/" component={Home} />
              <Route path="/introduce" component={Introduce} />

              <Route path="/photos" component={Photos} />

              <Switch>
                <Route path="/albums/:albumSeq/:trackSeq" component={MV} />
                <Route path="/albums/:albumSeq" component={Album} />
                <Route path="/albums" component={Albums} />
              </Switch>

              <Switch>
                <Route path="/talks/search" component={Search} />
                <Route path="/talks/write" component={Write} />
                <Route path="/talks/edit/:talkSeq" component={Edit} />
                <Route path="/talks/:talkSeq" component={Talk} />
                <Route path="/talks" component={Talks} />
              </Switch>

              {user.email?.includes("admin") && (
                <Switch>
                  <Route exact path="/admin" component={Admin} />
                  <Route path="/admin/introduce" component={AdminIntroduce} />
                  <Route path="/admin/photos" component={AdminPhotos} />
                  <Route path="/admin/albums" component={AdminAlbums} />
                  <Route path="/admin/album/add" component={AdminAlbumAdd} />
                  <Route path="/admin/album/edit/:albumSeq" component={AdminAlbumEdit} />
                  <Route path="/admin/talks" component={AdminTalks} />
                </Switch>
              )}
            </>
          ) : (
            <>
              <Route strict path="/" component={Login} />
            </>
          )}
        </ThemeProvider>
      </BrowserRouter>
    )
  )
}

export default App
