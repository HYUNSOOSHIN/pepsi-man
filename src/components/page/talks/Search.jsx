import React from "react"
import Layout from "../../common/Layout"
import TalkItem from "../../item/TalkItem"

import SearchIcon from "@material-ui/icons/Search"

const Search = () => {
  const [searchText, setSearchText] = React.useState("")

  return (
    <Layout>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", border: "1px solid" }}>
          <SearchIcon style={{ width: "30px", height: "30px", marginRight: "10px" }} />
          <input
            type={"text"}
            style={{ width: "500px", height: "30px", border: "none", fontSize: "20px" }}
            placeholder={"검색어를 입력해주세요."}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        {[1, 2, 3, 4].map((item, index) => (
          <TalkItem key={index} item={item} />
        ))}
      </section>
    </Layout>
  )
}

export default Search
