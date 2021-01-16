import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/news" component={News} />
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
    </BrowserRouter>
  )
}

export default App
