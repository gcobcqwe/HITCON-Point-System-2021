import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
import TradingModal from "./Trading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #B9B9B9 0% 0% no-repeat padding-box;
  border-radius: 24px;
  padding: 40px 40px 6px 40px;

  @media(min-width: 1918px) {
    position: fixed;
    top: 10%;
    right: 5%;
    width: 360px;
    height: 328px;
  }
}
`;

const UserInfo = styled.div`
  display: flex;
  color: #3C3C3C;
  justify-content: space-between;
  margin-bottom: 27px;
`;

const Username = styled.div`
  line-height: 47px;
  font-size: 32px;
  color: #3C3C3C;
`;

const UserImage = styled.img`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 50%;
`;

const UserSignout = styled.a`
  line-height: 17px;
  font-size: 12px;
  text-decoration: underline;
  color: #3C3C3C;
`;

const PointWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  background: #6A6A6A 0% 0% no-repeat padding-box;
  border-radius: 7px;
  padding: 10px 20px;
  margin-bottom: 27px;
`;

const Quantity = styled.div`
  font-family: Bungee;
  color: #FFFFFF;
  flex-grow: 1;
  text-align: center;
`;

const Unit = styled.div`
  position: absolute;
  color: #E2E2E2;
`;

const Actions = styled.div`
  > button {
    margin-bottom: 27px;
  }
`;

const ActionButton = styled(Button)`
  font-size: 16px;
  background: #F0F0F0 0% 0% no-repeat padding-box;
  width: 100%;
  color: #696969;
  border-width: 0px;

  a:visited {
    color: #696969;
  }
`;


const User = ({nickname, points, imageSrc}) => {

  const handleTrading = () => {
    console.log('trading click');
  }

  return (
    <>
    <Container>
      <UserInfo>
        <div className="flex-column">
          <Username>{nickname}</Username>
          <UserSignout href="">sign out</UserSignout>
        </div>
        <div>
          <UserImage src={imageSrc}  onClick="codePopUp()" />
        </div>
      </UserInfo>

      <PointWrapper>
        <Quantity>{points}</Quantity>
        <Unit>P</Unit>
      </PointWrapper>

      <Actions>
        <ActionButton onClick={handleTrading} >交易點數</ActionButton>
        <ActionButton>
          <a href="https://shopee.tw/hitcon" target="_blank">前往 HITCON 商城</a>
        </ActionButton>
      </Actions>
    </Container>
    </>
  )
}

User.defaultProps = {
  nickname: "未知人物",
  imageSrc: "https://via.placeholder.com/78x78" ,
  points: "0",
}


export default User;
