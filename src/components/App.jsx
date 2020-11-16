import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import News from "./page/News"
import Albums from "./page/albums/Albums"
import Album from "./page/albums/Album"
import MV from "./page/albums/MV"
import Talks from "./page/Talks"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/news" component={News} />
      <Route path="/albums" component={Albums} />
      <Switch>
        <Route path="/album/:albumSeq/MV/:trackNo" component={MV} />
        <Route path="/album/:albumSeq" component={Album} />
      </Switch>

      <Route path="/talks" component={Talks} />
    </BrowserRouter>
  )
}

export default App
