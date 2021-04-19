import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "../../../containers/container"
import Layout from "../../common/Layout"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"
import pepsi from "../../../images/pep.jpg"

const Talk = (props) => {
  const { talkSeq } = props.match.params
  const { talk, setTalk } = props
  const history = useHistory()
  const [comment, setComment] = React.useState("")

  React.useEffect(() => {
    setTalk(talkSeq)
  }, [])

  if (Object.keys(talk).length === 0) return null

  return (
    <Layout>
      <TalkSection>
        <Box1>
          <Title>{talk.title}</Title>
          <Writer>
            <span>{talk.userName}</span> {talk.regDate}
          </Writer>

          {/* 이미지 대체 */}
          <Thumbnail src={pepsi} alt={"임시 이미지"} />

          <Contents>{talk.contents}</Contents>
        </Box1>

        <Box2>
          <LikeButton onClick={() => alert("This is a feature under development")}>
            <FavoriteIcon />
          </LikeButton>
        </Box2>

        <Box3>
          <FlexBox>
            <FindInPageIcon />
            <p>{talk.clickCount}</p>
            <FavoriteIcon />
            <p>{talk.likeCount}</p>
            <CommentIcon />
            <p>{talk.commentCount}</p>
          </FlexBox>

          <BackButton onClick={() => history.goBack()}>to list</BackButton>
        </Box3>
      </TalkSection>

      <CommentSection>
        <CommentWriteView>
          <input type={"text"} placeholder={"Please enter a comment"} value={comment} onChange={(e) => setComment(e.target.value)} />
          <button onClick={() => alert("This is a feature under development")}>
            <p>write</p>
          </button>
        </CommentWriteView>

        <CommentListView>
          <div>
            <p id={"title"}>익명1</p>
            <p id={"date"}>작성시간</p>
          </div>

          <p>내용입니다</p>
        </CommentListView>
      </CommentSection>
    </Layout>
  )
}

export default Container(Talk)

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
  margin-top: 5px;
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
const Thumbnail = styled.img`
  width: 524px;
  height: 524px;
  margin: 30px 0px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-width: 524px;
  }
`
const Contents = styled.p`
  width: 100%;
  height: fit-content;
  font-size: 15px;
`
const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
`
const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 30px 0;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  & > svg {
    width: 24px;
    height: 24px;
    padding: 0px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`
const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
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
  margin: 10px 0px 30px;
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
  align-items: center;
  width: 100%;
  height: fit-content;
  & > input {
    flex: 1;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
  }
  & > button {
    width: fit-content;
    height: 40px;
    margin-left: -1px;
    padding: 0 10px;
    border: 1px solid;
  }
`
const CommentListView = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid;
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
  & > p {
    margin-top: 5px;
    font-size: 15px;
    white-space: pre-line;
  }
`
