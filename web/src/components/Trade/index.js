import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import QrReader from "react-qr-reader";
import Cookies from "js-cookie";
import Modal from "../Modal";

import SendIcon from "../../public/ionic-ios-send.svg";
import ReceivedIcon from "../../public/material-call_received.svg";
import GiftIcon from "../../public/ionic-ios-gift.svg";
import { langText } from "../../lang";

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

const SendPage = ({setPage}) => {
  const [points, setPointes] = useState(() => {
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { data:{ points }} = resp.data;
        return parseInt(points, 10);
      }).catch((error) => {
        console.error('get users error', error);
        return 0;
      });
  });
  const [sendPoint, setSendPoint] = useState(0);
  const [step, setStep] = useState(0);
  const [receiver, setReceiver] = useState('null');
  const handleScan = (data) => {
    if (data === null) return;
    setReceiver(data);
    setStep(1);
  };
  const handleError = (error) => {
    console.error({error});
  };

  const handleSend = () => {
    const apiURL = `${process.env.POINT_URL}/points/transactions`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.post(apiURL, {points: sendPoint, receiver})
      .then((resp) => {
        const { success } = resp.data;
        if (success) {
          setStep(2);
          setPoints(points - sendPoint);
        }
      })
      .catch((err) => {
        console.error('transactions error', err);
      })
  }
  const handleCancel = () => setPage(0);
  const handleBack = () => {
    const num = step - 1 > 0 ? step : 0;
    setStep(num);
  }
  return(
  <Content>
    { step === 0 ?
      <>
        <Title>{langText("TRADE_SEND_POINTS")}</Title>
        <Description>{langText("TRADE_SCAN_QR")}</Description>
        <QrReader
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
     </> : "" }
    { step === 1 ?
      <>
        <Title>{langText("TRADE_SEND_POINTS")}</Title>
        <div>{langText("TRADE_SENDING_QTY").replace("{points}", points)}</div>
        <div>{langText("TRADE_SENDING_TARGET")}{receiver}</div>
        <input type="text" onChange={(e) => setSendPoint(e.target.value)}/>
        <Button onClick={handleSend}>{langText("CONFIRM")}</Button>
        <Cancel onClick={handleBack}>{langText("CANCEL")}</Cancel>
      </> : "" }
    { step === 2 ?
      <>
       <Title>{langText("TRADE_SENT_SUCESS")}</Title>
       <Description>{langText("TRADE_SENT_DESC").replace("{sendPoint}", sendPoint)}</Description>
       <Description>{langText("TRADE_SENT_REMAINING").replace("{points}", points)}</Description>
       <Button onClick={handleCancel}>{langText("DONE")}</Button>
      </>: "" }
  </Content>
  )
}

const ReceivedPage = ({uid, setPage}) => {
  const handleCancel = () => setPage(0)
  return(
    <Content>
      <Title>{langText("TRADE_RECEIVING")}</Title>
      <Description>{langText("TRADE_PROVIDE_QR")}</Description>
      <QRCode value={uid} />
      <span>value: {uid}</span>
      <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
    </Content>
  )
}

ReceivedPage.defaultProps = {
  uid: 'unknown',
}

const TakePage = ({setPage}) => {
  const [step, setStep] = useState(0);
  const [code,setCode] = useState();
  const [points, setPoints] = useState();
  const handleScan = (data) => {
    if (data === null) return;
    const apiURL = `${process.env.POINT_URL}/points/redeem-code`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.post(apiURL, {code: data},{ headers })
      .then((resp) => {
        const { success, data:{ points }} = resp.data;
        if (success) {
          setPoints(points);
          setStep(1);
        }
      })
      .catch((err) => {
        console.error('exchange redeem-code error', err);
      });
  }
  const handleError = (err) => {
    console.error('take point scan error',err);
  }

  const handleCancel = () => setPage(0)
  return(
    <Content>
      { step === 0 ?
      <>
        <Title>{langText("TRADE_REDEEM_POINTS")}</Title>
        <Description>{langText("TRADE_REDEEM_QR")}</Description>
        <QrReader
            onScan={handleScan}
            onError={handleError}
            style={{ width: '100%' }}
        />
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
      </> : "" }
      { step === 1 ?
      <>
        <Title>{langText("TRADE_REDEEM_CONFIRM")}</Title>
        <Description>{langText("TRADE_REDEEM_DONE").replace("{points}", points)}</Description>
      </> : "" }
    </Content>
  )
}

const TradingMain = styled.div``;

const Trading = ({setIsTradningOpen}) => {
  const [points, setPoints] = useState(0);
  const [uid, setUid] = useState();
  const [page, setPage] = useState(0);
  const switchSend = () => setPage(1);
  const switchRecivied = () => setPage(2);
  const switchTake = () => setPage(3);
  const handleCancel = () => setIsTradningOpen(false);

  useEffect(() => {
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { data:{ points, uid }} = resp.data;
        setPoints(points);
        setUid(uid)
      })
      .catch((error) => {
        console.error('get users error', error);
      });
  }, []);

  return (
    <TradingContainer>
      { page === 0 ?
      <TradingMain>
        <Title>{langText("TRADE_TRADING_POINTS")}</Title>
        <Description>{langText("POINTS_OWNED").replace("{points}", points)}</Description>
        <Button onClick={switchSend}>
          <img src={SendIcon}/>
          {langText("TRADE_SEND")}
        </Button>
        <Button onClick={switchRecivied}>
          <img src={ReceivedIcon}/>
          {langText("TRADE_RECEIVE")}
        </Button>
        <Button onClick={switchTake}>
          <img src={GiftIcon}/>
          {langText("TRADE_REDEEM")}
        </Button>
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
      </TradingMain> : null }
      { page === 1 ? <SendPage setPage={setPage}/> : null }
      { page === 2 ? <ReceivedPage setPage={setPage} uid={uid}/> : null }
      { page === 3 ? <TakePage setPage={setPage}/> : null }
    </TradingContainer>
  );
}

export default Trading;
