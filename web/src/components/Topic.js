import React from "react";
import styled from "styled-components";
import {Button} from "./Button";

const Container = styled.div`
`;

const Image = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const Info = styled.div`
  background: #002680;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 18px 35px 36px 30px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 22px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  max-width: 633px;
  margin-bottom: 27px;
`;

const Topic = ({title, description, imageSrc, actionLink, actionText, actionToken}) => {
  return (
    <Container>
      <Image>
        <img src={imageSrc} />
      </Image>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <form method="POST" action={actionLink}>
          { actionToken ?
            <input type="hidden" name="token" value={actionToken} /> :
            ""
          }
          <Button type ="submit">{actionText}</Button>
        </form>
      </Info>
    </Container>
  )
}

Topic.defaultProps = {
  title: "駭客狗狗",
  description: "喵～我是駭客狗狗，HITCON 最新開發的狗狗聊天機器人，不過我可沒有百寶袋唷！狗狗將會在 Telegram 以及 IRC 上協助大家參與 HITCON 2021，也許還會有一些小驚喜唷！喵～期待大會與各位相見！#聊天機器人 #駭客狗狗",
  imageSrc: "https://via.placeholder.com/361x190",
  actionLink: "https://t.me/hitcon_bot?start=00000001_6ce709f26bf3d745565024957ea1d003",
  actionText: "前往駭客狗狗",
  actionToken: false,
}

export default Topic;
