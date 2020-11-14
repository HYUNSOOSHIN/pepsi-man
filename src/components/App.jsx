import { BrowserRouter, Route } from "react-router-dom"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import News from "./page/News"
import Albums from "./page/albums/Albums"
import Album from "./page/albums/Album"
import Talks from "./page/Talks"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/news" component={News} />
      <Route path="/albums" component={Albums} />
      <Route path="/album/:albumSeq" component={Album} />
      <Route path="/talks" component={Talks} />
    </BrowserRouter>
  )
}

export default App
