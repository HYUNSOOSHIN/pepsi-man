import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { dbService } from "../../../fireBase"
import { timeForToday, trim } from "utils/util"
import Layout from "../../common/Layout"
import { IconButton } from "@material-ui/core"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import CommentIcon from "@material-ui/icons/Comment"
import CloseRounded from "@material-ui/icons/CloseRounded"

const Talk = (props) => {
  const { talkSeq } = props.match.params
  const history = useHistory()
  const { user } = useSelector((state) => state.userReducer)
  const [talk, setTalk] = useState({})
  const [commentList, setCommentList] = useState([])
  const [comment, setComment] = useState("")

  useEffect(() => {
    dbService
      .collection("comments")
      .where("talkSeq", "==", talkSeq)
      .onSnapshot((snapshot) => {
        setCommentList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })

    dbService
      .collection("talks")
      .doc(talkSeq)
      .onSnapshot((snapshot) => setTalk(snapshot.data()))
  }, [])

  const onSubmitComment = useCallback(async () => {
    if (trim(comment) == "") {
      alert("Please enter a comment")
      return
    }
    const temp = { ...talk }
    delete temp.id
    await dbService
      .collection("talks")
      .doc(talkSeq)
      .update({ ...temp, commentCount: (talk.commentCount || 0) + 1 })
    await dbService
      .collection("comments")
      .add({
        talkSeq,
        uid: user.uid,
        writer: user.displayName || "Person",
        comment,
        createdAt: Date.now(),
      })
      .then(() => setComment(""))
  }, [comment, talk])

  const onClickCommentDelete = useCallback(
    async (id) => {
      const temp = { ...talk }
      delete temp.id
      await dbService
        .collection("talks")
        .doc(talkSeq)
        .update({
          ...temp,
          commentCount: talk.commentCount - 1,
        })
      await dbService.collection("comments").doc(id).delete()
    },
    [talk]
  )

  return (
    <Layout>
      <TalkSection>
        <Box1>
          <Title>{talk.title}</Title>
          <Writer>
            <span>{talk.writer || "Person"}</span> {timeForToday(talk.createdAt)}
          </Writer>
        </Box1>

        <Box2>
          {talk.imageUrl && (
            <ImageView>
              <Thumbnail src={talk.imageUrl} alt={"image"} />
            </ImageView>
          )}

          <Contents>{talk.contents}</Contents>
        </Box2>

        <Box3>
          <FlexBox>
            <FindInPageIcon />
            <p>{talk.clickCount}</p>
            <CommentIcon />
            <p>{talk.commentCount}</p>
          </FlexBox>

          <BackButton onClick={() => history.goBack()}>to list</BackButton>
        </Box3>
      </TalkSection>

      <CommentSection>
        <CommentWriteView>
          <textarea placeholder={"Please enter a comment"} value={comment} onChange={(e) => setComment(e.target.value)} />
          <button onClick={onSubmitComment}>
            <p>write</p>
          </button>
        </CommentWriteView>

        {commentList
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((i, idx) => (
            <CommentListView key={idx}>
              <BetweenView>
                <div>
                  <p id={"title"}>{i.writer || "Person"}</p>
                  <p id={"date"}>{timeForToday(i.createdAt || Date.now())}</p>
                </div>
                {i.uid == user.uid && (
                  <IconButton style={{ padding: "0px", borderRadius: "0px" }} onClick={() => onClickCommentDelete(i.id)}>
                    <CloseRounded />
                  </IconButton>
                )}
              </BetweenView>

              <p>{i.comment}</p>
            </CommentListView>
          ))}
      </CommentSection>
    </Layout>
  )
}

export default Talk

// TALK
const TalkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
  }
`
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.border};
`
const Title = styled.p`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Writer = styled.p`
  width: 100%;
  margin-top: 15px;
  font-size: 15px;
  & > span {
    font-weight: bold;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
const Box2 = styled.div`
  width: 100%;
  margin-top: 30px;
`
const ImageView = styled.div`
  position: relative;
  width: 524px;
  margin-bottom: 30px;
  &::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 524px;
  }
`
const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`
const Contents = styled.p`
  width: 100%;
  height: fit-content;
  font-size: 15px;
`
const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: fit-content;
  margin-top: 30px;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 20px;
    height: 20px;
  }
  & > p {
    margin: 0px 5px;
    font-size: 12px;
    line-height: 20px;
  }
`
const BackButton = styled.button`
  width: fit-content;
  height: 35px;
  margin: 15px 0px 30px;
  padding: 0 10px;
  border: 1px solid;
  border-radius: 5px;
`

// COMMENT
const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
  }
`
const CommentWriteView = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & > textarea {
    flex: 1;
    width: 100%;
    height: 120px;
    padding: 5px 10px;
    resize: none;
  }
  & > button {
    width: fit-content;
    height: 40px;
    margin-left: 10px;
    padding: 0 10px;
    border: 1px solid;
  }
`
const CommentListView = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  & > p {
    margin-top: 5px;
    font-size: 15px;
    white-space: pre-line;
  }
`
const BetweenView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    #title {
      margin-right: 5px;
      font-size: 15px;
    }
    #date {
      font-size: 12px;
    }
  }
`
