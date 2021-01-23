import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"
import pepsi from "../../images/pep.jpg"

const TalkItem = (props) => {
  const history = useHistory()
  const { item } = props

  return (
    <Container onClick={() => history.push(`/talks/${item.talkSeq}`)}>
      <Thumbnail src={pepsi} alt={"임시 이미지"} />
      <TextBox>
        <div>
          <Title>{item.title}</Title>
          <Contents>{item.contents}</Contents>
        </div>

        <Box>
          <WriterView>
            <p>
              {item.regDate} <span>{item.userName}</span>
            </p>
          </WriterView>

          <TalkStatusView>
            <FindInPageIcon />
            <p>{item.clickCount}</p>
            <FavoriteIcon />
            <p>{item.likeCount}</p>
            <CommentIcon />
            <p>{item.commentCount}</p>
          </TalkStatusView>
        </Box>
      </TextBox>
    </Container>
  )
}

export default TalkItem

const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 0 auto 30px;
  padding: 0px;
  border: 1px solid var(--border);
  box-shadow: 0px 3.3px 5px 0px #08000010;
  text-align: left;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1) !important;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    transform: translateY(-8px);
  }
  @media (max-width: 1024px) {
    &:hover {
      box-shadow: 0px 3.3px 5px 0px #08000010 !important;
      transition: none;
      transform: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  padding: 10px;
`
const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const Contents = styled.p`
  overflow: hidden;
  display: -webkit-box;
  font-size: 15px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`
const WriterView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 15px;
    & > span {
      font-weight: bold;
    }
  }
`
const TalkStatusView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 15px;
    height: 15px;
  }
  & > p {
    margin: 0px 5px;
    font-size: 10px;
    line-height: 15px;
  }
`
