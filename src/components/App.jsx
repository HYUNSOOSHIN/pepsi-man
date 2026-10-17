import React, { useState, useEffect, lazy, Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { authService } from "../fireBase"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import { darkTheme, whiteTheme } from "utils/theme"
import { GlobalStyle } from "./styled/GlobalStyle"
// 사용자 페이지
const Login = lazy(() => import("./page/Login"))
const Home = lazy(() => import("./page/Home"))
const Introduce = lazy(() => import("./page/Introduce"))
const Photos = lazy(() => import("./page/photos"))
const Albums = lazy(() => import("./page/albums"))
const Album = lazy(() => import("./page/albums/Album"))
const MV = lazy(() => import("./page/albums/MV"))
const Talks = lazy(() => import("./page/talks"))
const Talk = lazy(() => import("./page/talks/Talk"))
const Search = lazy(() => import("./page/talks/Search"))
const Write = lazy(() => import("./page/talks/Write"))
const Edit = lazy(() => import("./page/talks/Edit"))
// 관리자 페이지
const Admin = lazy(() => import("./page/admin"))
const AdminIntroduce = lazy(() => import("./page/admin/introduce"))
const AdminPhotos = lazy(() => import("./page/admin/photos"))
const AdminAlbums = lazy(() => import("./page/admin/albums"))
const AdminAlbumAdd = lazy(() => import("./page/admin/albums/Add"))
const AdminAlbumEdit = lazy(() => import("./page/admin/albums/Edit"))
const AdminTalks = lazy(() => import("./page/admin/talks"))

function App() {
  const { darkmode } = useSelector((state) => state.configReducer)
  const { user } = useSelector((state) => state.userReducer)
  const [init, setInit] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    // 로그인/로그아웃 감지하는 관찰자 함수
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
      setInit(true)
    })

    return () => unsubscribe()
  }, [])

  return (
    init && (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={darkmode ? darkTheme : whiteTheme}>
          <GlobalStyle />
          <Suspense fallback={null}>
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
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    )
  )
}

export default App
