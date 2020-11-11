import { BrowserRouter, Route } from "react-router-dom"
import Home from "./page/Home"
import Introduce from "./page/Introduce"
import News from "./page/News"
import Albums from "./page/Albums"
import Talk from "./page/Talk"
import Admin from "./page/Admin"

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/news" component={News} />
      <Route path="/albums" component={Albums} />
      <Route path="/talk" component={Talk} />
      <Route path="/admin" component={Admin} />
    </BrowserRouter>
  )
}

export default App
