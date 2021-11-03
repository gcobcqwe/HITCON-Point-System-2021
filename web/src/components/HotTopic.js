import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: none;

  @media(min-width: 1280px) {
    position: relative;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    height: 364px;
    margin: 59px 0;
    max-width: 1031px;
  }
`;

const Image = styled.img`
   position: absolute;
   height: 100%;
   right: 0;
`;

const Info = styled.div`
  position: relative;
  background: rgb(0,38,128);
  background: linear-gradient(90deg, rgba(0,38,128,1) 0%, rgba(0,38,128,1) 55%, rgba(255,255,255,0) 90%);
  padding: 51px 350px 38px 43px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 22px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 30px;
`;

const Button = styled.button`
  margin-top: 20px;
  border-radius: 19px;
  font-size: 18px;
  font-weight: border;
  padding: 15px 20px;
`;

const HotTopic = ({title, description, imageSrc, actionLink, actionText, actionToken}) => {
  return (
    <Container>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <form method="POST" action={actionLink}>
          {
            actionToken ?
            <input type="hidden" name="token" value={actionToken} /> :
            null
          }
          <Button type ="submit">{actionText}</Button>
        </form>
      </Info>
      <Image src={imageSrc} />
    </Container>
  )
}

HotTopic.defaultProps = {
  title: "駭客狗狗",
  description: "喵～我是駭客狗狗，HITCON 最新開發的狗狗聊天機器人，不過我可沒有百寶袋唷！狗狗將會在 Telegram 以及 IRC 上協助大家參與 HITCON 2021，也許還會有一些小驚喜唷！喵～期待大會與各位相見！#聊天機器人 #駭客狗狗",
  imageSrc: "https://via.placeholder.com/361x190",
  actionLink: "",
  actionText: "Go!",
  actionToken: false,
}

export default HotTopic;
