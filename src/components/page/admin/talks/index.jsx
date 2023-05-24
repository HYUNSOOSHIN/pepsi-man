import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { dbService } from "../../../../fireBase"
import Layout from "components/common/Layout"

const AdminTalks = () => {
  const [talkList, setTalkList] = useState([])

  useEffect(() => {
    dbService.collection("talks").onSnapshot((snapshot) => {
      setTalkList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const onClickTalkDelete = useCallback((id) => {
    if (confirm("Really?")) {
      dbService.collection("talks").doc(id).delete()
      dbService
        .collection("comments")
        .where("talkSeq", "==", id)
        .get()
        .then((docs) => docs.forEach((doc) => doc.ref.delete()))
    }
  }, [])

  return (
    <Layout>
      <Table>
        <colgroup>
          <col style={{}}></col>
          <col style={{ width: "30%" }}></col>
          <col style={{ width: "60%" }}></col>
          <col style={{}}></col>
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>TITLE</th>
            <th>CONTENTS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {talkList
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((i, idx) => (
              <tr key={idx}>
                <td style={{ textAlign: "center" }}>{idx + 1}</td>
                <td>{i.title}</td>
                <td>{i.contents}</td>
                <td style={{ textAlign: "center" }}>
                  <button onClick={() => onClickTalkDelete(i.id)}>DEL</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Layout>
  )
}

export default AdminTalks

const Table = styled.table`
  width: 1024px;
  margin: 0 auto;
  border: 1px solid;
  th {
    padding: 5px;
    border: 1px solid;
  }
  td {
    padding: 5px;
    border: 1px solid;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`
