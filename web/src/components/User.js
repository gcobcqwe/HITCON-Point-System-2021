import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TradingModal from "./Trading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 100px;
  right: 15px;
  background: #0F2250;
  box-shadow: 0px 3px 6px #1B3A76B5;
  border-radius: 39px;
  min-width: 380px;
  z-index: 2;

  @media(min-width: 1280px) {
    bottom: unset;
    top: 100px;
    right: 120px;
    min-width: 390px;
  }

  @media(min-width: 1920px) {
    display: none;
  }
}
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  background: #0F2250
  box-shadow: 0px 3px 6px #1B3A76B5;
  border-radius: 48px;
  box-sizing: border-box;
  padding-left: 39px;
`;

const Username = styled.div`
  font-size: 26px;
`;

const UserSignout = styled.a`
  font-size: 16px;
  text-decoration: underline;
  color: #FFFFFF;
  margin-left: 10px;
`;

const PointWrapper = styled.div`
  display: flex;
  right: 20px;
  min-width: 123px;
  background: #3046BF 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000003C;
  border-radius: 21px;
  padding: 10px 20px;
`;

const Quantity = styled.div`
  font-family: Bungee;
  flex-grow: 1;
  text-align: center;
`;

const Unit = styled.div`
  position: absolute;
  color: #E2E2E2;
`;


const ActionBar = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  background: #2A64F2 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000050;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 10px;

  z-index: 1;
  user-select: none;

  input {
    display: block;
    width: 45px;
    height: 45px;
    position: absolute;
    top: -2px;
    left: -2px;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 20px;
    height: 3px;
    margin-top: 3px;
    margin-bottom: 2px;
    border-radius: 20px;
    position: relative;
    background: #FFFFFF;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s ease,
    background 0.5s ease,
    opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(135deg) translate(-11px, 4px);
    background: #FFFFFF;
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    transform: rotate(45deg) translate(0px, -12px);
  }
`;

const Menu = styled.div`
`;


const Actions = styled.div`
  display: flex;
`;

const ActionButton = styled.div`
  width: 146px;
  height: 48px;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0px 3px 6px #00000080;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #000000;
  padding: 10px 17px;
  cursor: pointer;
`;

const UserWide = styled.div`
  display: none;
  @media(min-width: 1920px) {
    display: block;
    position: fixed;
    left: 65%;
    background: #0F2250 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #1B3A76B5;
    border-radius: 39px;
    min-width: 380px;
  }

`;


const User = ({nickname, points }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
    <Container>
      {
        isMenuOpen ?
        <Menu>
          <PointWrapper>
            <Quantity>{points}</Quantity>
            <Unit>P</Unit>
          </PointWrapper>
          <Actions>
            <ActionButton>交易點數</ActionButton>
            <ActionButton>兌換點數</ActionButton>
          </Actions>
        </Menu> :
        null
      }
      <UserInfo>
        <Username>
          {nickname}
          {
            isMenuOpen ?
            <UserSignout href="">sign out</UserSignout> :
            null
          }
        </Username>
        <ActionBar onClick={openMenu}>
          <input type="checkbox" />
          <span />
          <span />
          <span />
        </ActionBar>
      </UserInfo>
    </Container>
    <UserWide>
      <Username>{nickname}</Username>
      <UserSignout href="">sign out</UserSignout>
      <PointWrapper>
        <Quantity>{points}</Quantity>
        <Unit>P</Unit>
      </PointWrapper>
      <Actions>
        <ActionButton>交易點數</ActionButton>
        <ActionButton>兌換點數</ActionButton>
      </Actions>
    </UserWide>
    </>
  )
}

User.defaultProps = {
  nickname: "未知人物",
  points: "0",
}


export default User;
