import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import News from "./page/News"
import Albums from "./page/albums/Albums"
import Album from "./page/albums/Album"
import MV from "./page/albums/MV"
import Talks from "./page/talks/Talks"
import Talk from "./page/talks/Talk"
import Search from "./page/talks/Search"
import Write from "./page/talks/Write"

const InitStyle = createGlobalStyle`
  ${reset};
  html,
  body,
  #root {
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    line-height: 1.2;
  }
`

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <InitStyle />
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/news" component={News} />
      <Route path="/albums" component={Albums} />
      <Switch>
        <Route path="/album/:albumSeq/MV/:trackNo" component={MV} />
        <Route path="/album/:albumSeq" component={Album} />
      </Switch>
      <Route path="/talks" component={Talks} />
      <Route path="/talk/:talkSeq" component={Talk} />
      <Route path="/search" component={Search} />
      <Route path="/write" component={Write} />
    </BrowserRouter>
  )
}

export default App
