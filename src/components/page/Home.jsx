import Layout from "../common/Layout"
import thunderbirdmotel from "./../../images/thunderbirdmotel.jpg"

const Home = () => {
  return (
    <Layout>
      <section
        id={"home_image"}
        style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <img
          style={{ width: "514px", objectFit: "cover" }}
          src={thunderbirdmotel}
          alt={"home img"}
        />
      </section>
    </Layout>
  )
}

export default Home
