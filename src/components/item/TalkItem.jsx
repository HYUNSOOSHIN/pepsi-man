import React from "react"
import styled from "styled-components"
import FindInPageIcon from "@material-ui/icons/FindInPage"
import CommentIcon from "@material-ui/icons/Comment"
import { timeForToday } from "utils/util"

const TalkItem = (props) => {
  const { item, onClick } = props

  return (
    <Container onClick={onClick}>
      <ImageView>{item.imageUrl && <Thumbnail src={item.imageUrl} alt={"temp image"} />}</ImageView>

      <TextBox>
        <div style={{ width: "100%" }}>
          <Title>{item.title}</Title>
          <Contents>{item.contents}</Contents>
        </div>

        <Box>
          <WriterView>
            <p>
              {timeForToday(item.createdAt)} <span>{item.writer || "Person"}</span>
            </p>
          </WriterView>

          <TalkStatusView>
            <FindInPageIcon />
            <p>{item.clickCount}</p>
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
  @media (max-width: 768px) {
    flex-direction: column;
    &:hover {
      box-shadow: 0px 3.3px 5px 0px #08000010 !important;
      transition: none;
      transform: none;
    }
  }
`
const ImageView = styled.div`
  position: relative;
  width: 200px;
  &::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media (max-width: 768px) {
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  width: 0px;
  height: 200px;
  padding: 10px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  /* width: 100%; */
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  word-break: break-all;
  -webkit-line-clamp: 3;
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
    @media (max-width: 768px) {
      font-size: 12px;
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
    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }
  & > p {
    margin: 0px 5px;
    font-size: 10px;
    line-height: 15px;
  }
`
