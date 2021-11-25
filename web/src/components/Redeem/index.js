import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import Cookies from "js-cookie";

import CloseButton from "../CloseButton";
import Modal from "../Modal";
import { langText } from "../../lang";

import QRCodeImg from "../../public/qrcode.svg";
import UsedQRCodeImg from "../../public/usedQrcode.svg";

const Container = styled(Modal)`
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  background: #E5E5E5;
  border-radius: 13px;
  width: 100%;
  height: 57px;
  border: none;
  box-shadow: none;
  margin-bottom: 34px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding-right: 20px;
  }

  :active {
    background: #858383;
  }

  @media(min-width: 768px) {
    background: none;
    border-radius: 0;
    min-width: 249px;
    justify-content: left;
    padding-left: 30px;

    :active {
      background: rgba(0, 38, 128, 0.15);
    }
  }
`

const CompleteButton = styled(Button)`
  height: auto;
  min-width: unset;
  padding: 5px 40px;
  border-radius: 22px;
  width: auto;
  background: #154ED6;
  color: #fff;

  :active {
    background: rgba(21, 78, 214, 0.15);
  }
`;

const Cancel = styled(Button)`
  display: flex;
  @media(min-width: 768px) {
    display: none;
  }
  background: none;
  color: #8D8D8D;
  padding-left: 10px;
  font-size: 24px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.h3`
  color: #4B4B4B;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    display: block;
    height: 100%;
    align-items: left;
    max-width: 100%;

    ${Title} {
      font-size: 28px;
      text-align: left;
    }

    ${Description} {
      font-size: 20px;
    }
  }
`;

const QRCodeContent = styled(Content)`
  @media(min-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;

    ${Title} {
      font-size: 28px;
      text-align: center;
    }
  }
}
`;

const SideBarItem = styled.div`
  font-size: 20px;
  padding: 20px 40px 20px 50px;
  margin-left: -50px;
  font-weight: bold;

  &.selected {
    color: #002680;
    background-color: #D9DEEB;
  }
`;

const SideBar = styled.div`
  display: none;
  flex-direction: column;
  border-right: 2px solid #000;
  height: 100%;
  min-width: 245px;

  ${Title} {
    text-align: left;
    font-size: 36px;
    margin-top: 5px;
    margin-bottom: 50px;
  }

  @media(min-width: 1280px) {
    display: flex;
    margin-right: 40px;
  }
`;

const TableWrapper = styled.div`
  max-height: 60vh;
  overflow: auto;

  @media(min-width: 768px) {
    max-height: 40vh;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  .columnHeader > div, .columnHeader > div:nth-child(3) {
    z-index: 1;
    color: #fff;
    background: #002680;
    padding: 15px 10px;
    font-family: inherit;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  .statusText {
    color: #729b55;
  }

  &.isUsed {
    div {
      background: #D0D0D0;
    }

    .statusText {
      color: #b29d9c;
    }
  }

  div {
    padding: 15px 10px;
    box-sizing: border-box;
    background: #EDEDED;
    margin: 1px;
  }

  div:nth-child(1) {
    min-width: 85px;
    text-align: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  div:nth-child(2) {
    min-width: 100px;
    text-align: center;
  }

  div:nth-child(3) {
    position: relative;
    max-width: 420px;
    padding: 15px 40px 15px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex: 1;
    overflow: hidden;

    div {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-family: monospace;
      text-algin: center;
      margin-right: 10px;
      padding: 0;
    }

    button {
      position: absolute;
      top: 7px;
      right: 0;
      background: none;

      :disabled {
        cursor: initial;

        img {
          box-shadow: none;
        }
      }
    }

    img {
      background: #fff;
      border: 4px solid #fff;
      border-radius: 5px;
      box-shadow: 0px 2px 4px #101010d9;
    }
  }
`;

const QRCodeWrapper = styled.div`
  margin: 65px 0;
  text-align: center;
`;

const RedeemRow = ({ points, isUsed, code, setDisplayCode }) => {
  const handleShow = () => setDisplayCode(JSON.stringify({ code }));
  return (
    <Row className={isUsed ? "isUsed" : "notUsed"}>
      <div>{points}</div>
      <div className="statusText">{isUsed ? langText("REDEEM_STATE_SENT") : langText("REDEEM_STATE_AVAIABLE")}</div>
      <div>
        <div>{code}</div>
        <button onClick={handleShow} disabled={isUsed}>
          <img src={isUsed ? UsedQRCodeImg : QRCodeImg} />
        </button>
      </div>
    </Row>
  )
}

const RedeemSteps = Object.freeze({
  'Listing': 0,
  'ShowingCode': 1,
});

const Redeem = ({ setIsRedeemOpen }) => {
  const [step, setStep] = useState(RedeemSteps.Listing);
  const [redeems, setRedeems] = useState([]);
  const [displayCode, setDisplayCode] = useState(null);
  useEffect(() => {
    const apiURL = `${process.env.POINT_URL}/points/redeem-code`;
    const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { success, data } = resp.data;
        if (success) setRedeems(data);
      })
      .catch((error) => {
        const { state, data: { message } } = error.response;
        console.error('get redeem-code error', message);
      });
  }, [step, displayCode]);


  useEffect(() => {
    if (displayCode !== null) {
      setStep(RedeemSteps.ShowingCode);
    }
  }, [displayCode]);

  const handleCancel = () => setIsRedeemOpen(false);
  const handleFinish = () => {
    setStep(RedeemSteps.Listing);
    setDisplayCode(null);
  }

  return (
    <Container>
      <SideBar>
        <Title>{langText("REDEEM_LIST_TITLE")}</Title>
        <SideBarItem className="selected">{langText("REDEEM_LIST_TITLE")}</SideBarItem>
      </SideBar>
      {step === RedeemSteps.Listing &&
        <>
          <CloseButton onClick={handleCancel}/>
          <Content>
            <Title>{langText("REDEEM_LIST_TITLE")}</Title>
            <Description>{langText("REDEEM_COUNTER").replace("{number}", redeems.filter((r) => {
              return r.is_used === false;
            }).length)}
            </Description>
            <TableWrapper>
              <Column>
                <Row className="columnHeader">
                  <div>{langText("REDEEM_VALUE")}</div>
                  <div>{langText("REDEEM_STATE")}</div>
                  <div>{langText("REDEEM_CODE")}</div>
                </Row>
                {redeems.map((r, idx) => <RedeemRow key={idx} isUsed={r.is_used} code={r.code} points={r.points} setDisplayCode={setDisplayCode} />)}
              </Column>
            </TableWrapper>
            <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
          </Content>
        </>}
      {step === RedeemSteps.ShowingCode &&
        <QRCodeContent>
          <Title>{langText('REDEEM_TARGET')}</Title>
          <QRCodeWrapper>
            <QRCode value={displayCode}/>
          </QRCodeWrapper>
          <CompleteButton onClick={handleFinish}>{langText("DONE")}</CompleteButton>
        </QRCodeContent>}
    </Container>
  )
}


export default Redeem;
