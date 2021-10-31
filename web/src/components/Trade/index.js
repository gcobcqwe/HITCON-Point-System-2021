import React, {useState} from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import QrReader from "react-qr-reader";

import SendIcon from "../../public/ionic-ios-send.svg";
import ReceivedIcon from "../../public/material-call_received.svg";
import GiftIcon from "../../public/ionic-ios-gift.svg";

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: #FFF;
  border-top-left-radius: 43px;
  border-top-right-radius: 43px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 65px 0 65px;
  color: #121212;

  @media(min-width: 1280px) {
    min-height: 623px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 43px;
    padding: 2em 0;
  }
`;

const TradingContainer = styled(Modal)`
  @media(min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;


const Title = styled.div`
  font-size: 36px;

  @media(min-width: 1280px) {
    padding-left: 30px;
  }
`;

const Description = styled.h3`
  font-size: 20px;
  margin-bottom: 48px;

  @media(min-width: 1280px) {
    padding-left: 30px;
  }
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

  @media(min-width: 1280px) {
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
const Cancel = styled(Button)`
  background: none;
  color: #8D8D8D;
  padding-left: 10px;
  font-size: 24px;

`;

const Content = styled.div`
  @media(min-width: 1280px) {
    display: block;
    height: 100%;
    padding-left: 3em;
    border-left: 2px solid #000;

    ${Title} {
      font-size: 28px;
    }

    ${Description} {
      font-size: 20px;
    }
  }
`;

const SendPage = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState();
  const handleScan = (data) => {
    if (data === null) return;
    setCode(data);
    setStep(1);
  };
  const handleError = (error) => {
    console.log({error});
  };

  const handleSend = () => {
    // TODO
    // if sent ok
    setStep(2);
  }
  const handleClose = () => {
    // TODO close Trading Modal
  }

  const handleBack = () => {
    const num = step - 1 > 0 ? step : 0;
    setStep(num);
  }
  return(
  <Content>
    { step === 0 ?
      <>
        <Title>發送點數</Title>
        <Description>請掃描欲發送對象的 QR code</Description>
        <QrReader
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
        <Cancel>取消</Cancel>
     </> : "" }
    { step === 1 ?
      <>
        <Title>發送點數</Title>
        <div>請輸入欲發送的點數數量 您目前共有 3000 點</div>
        <div>發送對象：nickname</div>
        <input type="text" />
        <Button onClick={handleSend}>確認</Button>
        <Cancel onClick={handleBack}>取消</Cancel>
      </> : "" }
    { step === 2 ?
      <>
       <Title>發送成功</Title>
       <Description>您已將 1000 點給予 nickname</Description>
       <Description>剩餘 2000 點</Description>
       <Button onClick={handleClose}>完成</Button>
      </>: "" }
  </Content>
  )
}

const ReceivedPage = () => (
  <Content>
    <Title>接收點數</Title>
    <Description>請出示下方 QR code 給發送對象</Description>
    <QRCode value="hey" />
    <Cancel>取消</Cancel>
  </Content>
)

const TakePage = () => {
  const [step, setStep] = useState(0);
  const handleScan = (data) => {
    if (data === null) return;
    console.log(data);
    // TODO if send api ok
    setStep(1);
  }
  const handleError = (error) => {
    console.log(error);
  }
  return(
    <Content>
      { step === 0 ?
      <>
        <Title>領取點數</Title>
        <Description>請掃描大會提供的 QR code</Description>
        <QrReader
            onScan={handleScan}
            onError={handleError}
            style={{ width: '100%' }}
        />
        <Cancel>取消</Cancel>
      </> : "" }
      { step === 1 ?
      <>
        <Title>領取</Title>
        <Description>您已收到 1000 點</Description>
      </> : "" }
    </Content>
  )
}

const TradingMain = styled.div``;

const Trading = () => {
  const [page, setPage] = useState(0);
  const switchSend = () => setPage(1);
  const switchRecivied = () => setPage(2);
  const switchTake = () => setPage(3);
  return (
    <TradingContainer>
      { page === 0 ?
      <TradingMain>
        <Title>交易點數</Title>
        <Description>您目前共有 3000 點</Description>
        <Button onClick={switchSend}>
          <img src={SendIcon}/>
          發送
        </Button>
        <Button onClick={switchRecivied}>
          <img src={ReceivedIcon}/>
          接收
        </Button>
        <Button onClick={switchTake}>
          <img src={GiftIcon}/>
          領取
        </Button>
        <Cancel>取消</Cancel>
      </TradingMain> : null }
      { page === 1 ? <SendPage /> : null }
      { page === 2 ? <ReceivedPage /> : null }
      { page === 3 ? <TakePage /> : null }
    </TradingContainer>
  );
}

export default Trading;
