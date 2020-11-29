import { useState } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"
import SearchIcon from "@material-ui/icons/Search"
import CreateIcon from "@material-ui/icons/Create"

const Talks = () => {
  const history = useHistory()
  const [orderBy, setOrderBy] = useState(0)

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <button
            style={{
              backgroundColor: orderBy === 0 ? "#646568" : "#ffffff",
              width: "80px",
              height: "35px",
              border: "1px solid",
              borderRadius: "5px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
            onClick={() => setOrderBy(0)}
          >
            <p style={{ color: orderBy === 0 ? "#ffffff" : "#646568", fontSize: "15px", fontWeight: "bold" }}>최신순</p>
          </button>
          <button
            style={{
              backgroundColor: orderBy === 1 ? "#646568" : "#ffffff",
              width: "80px",
              height: "35px",
              marginLeft: "-1px",
              border: "1px solid",
              borderRadius: "5px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
            onClick={() => setOrderBy(1)}
          >
            <p style={{ color: orderBy === 1 ? "#ffffff" : "#646568", fontSize: "15px", fontWeight: "bold" }}>인기순</p>
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <button style={{ padding: "0px" }} onClick={() => history.push("/search")}>
            <SearchIcon style={{ width: "30px", height: "30px" }} />
          </button>
          <button style={{ marginLeft: "5px", padding: "0px" }} onClick={() => history.push("/write")}>
            <CreateIcon style={{ width: "30px", height: "30px" }} />
          </button>
        </div>
      </section>

      <section style={{ overflowY: "auto", flex: 1, marginTop: "50px" }}>
        {[1, 2, 3, 4].map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Talks
