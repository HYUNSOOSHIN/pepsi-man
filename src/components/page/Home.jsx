import Layout from "../common/Layout"
import Container from "../../containers/container"
import thunderbirdmotel from "./../../images/thunderbirdmotel.png"

const Home = (props) => {
  const { count, setCount } = props
  console.log(count)

  return (
    <Layout>
      <section id={"home_image"} style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: "524px", objectFit: "cover" }} src={thunderbirdmotel} alt={"home img"} />
      </section>
    </Layout>
  )
}

export default Container(Home)
