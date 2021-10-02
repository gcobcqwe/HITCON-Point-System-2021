import React from "react";
import styled from "styled-components";
import {Button} from "./Button";

const Container = styled.div`
  position: relative;
  background: #777777 0% 0% no-repeat padding-box;
  padding: 51px 35px 28px 43px;
`;

const Text = styled.div`
  position: absolute;
  top: -28px;
  font-size: 36px;
  font-weight: 900;
`;

const ContentWrapper = styled.div`
  display: flex;

  @media(max-width: 1040px) {
    flex-direction: column-reverse;
    align-items: center;
  }
}
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 22px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  max-width: 633px;
  margin-bottom: 27px;
`;

const Image = styled.img`
  background: #D8D8D8 0% 0% no-repeat padding-box;
  border-radius: 15px;
  margin-left: 24px;

  @media(max-width: 1040px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`;

const Topic = ({title, description, imageSrc, actionLink, actionText}) => {
  return (
    <Container>
      <Text>主題活動</Text>
      <ContentWrapper>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <form method="POST" action={actionLink}>
            <Button type ="submit">{actionText}</Button>
          </form>
        </div>
        <div>
          <Image src={imageSrc} />
        </div>
      </ContentWrapper>
    </Container>
  )
}

Topic.defaultProps = {
  title: "駭客狗狗",
  description: "喵～我是駭客狗狗，HITCON 最新開發的狗狗聊天機器人，不過我可沒有百寶袋唷！狗狗將會在 Telegram 以及 IRC 上協助大家參與 HITCON 2021，也許還會有一些小驚喜唷！喵～期待大會與各位相見！#聊天機器人 #駭客狗狗",
  imageSrc: "https://via.placeholder.com/296x187",
  actionLink: "https://t.me/hitcon_bot?start=00000001_6ce709f26bf3d745565024957ea1d003",
  actionText: "前往駭客狗狗"
}

export default Topic;
