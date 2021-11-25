import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";
import QrReader from "react-qr-reader";
import Cookies from "js-cookie";
import Modal from "../Modal";

import SendIcon from "../../public/ionic-ios-send.svg";
import ReceivedIcon from "../../public/material-call_received.svg";
import GiftIcon from "../../public/ionic-ios-gift.svg";
import { langText } from "../../lang";

import UserContext from '../../UserContext.js';
import { toast } from "react-toastify";

const TradingContainer = styled(Modal)`
  text-align: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const Description = styled.h3`
  font-size: 20px;
  margin-bottom: 48px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: #E5E5E5;
  border-radius: 13px;
  height: 57px;
  border: none;
  box-shadow: none;
  margin-bottom: 34px;
  font-size: 24px;
  align-items: center;
  padding: 10px 17px;
  cursor: pointer;
  img {
    padding-right: 20px;
  }

  :active {
    background: #858383;
  }
  :hover {
    background: rgba(229, 229, 229, 0.35);
  }

  @media(min-width: 768px) {
    background: none;
    border-radius: 0;
    min-width: 249px;

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
  margin-top: 30px;
`;

const Content = styled.div`
`;

const SendingSteps = Object.freeze({
  'Scan': 0,
  'Sending': 1,
  'Success': 2,
});

const SendPage = ({setPage}) => {
  const [user, setUser] = useContext(UserContext);
  const [sendPoint, setSendPoint] = useState(0);
  const [isFixedAmount, setIsFixedAmount] = useState(false);
  const [step, setStep] = useState(SendingSteps.Scan);
  const [receiver, setReceiver] = useState('null');
  const [receiverNickname, setReceiverNickname] = useState();
  const handleScan = (stringData) => {
    if (stringData === null) return;
    const data = JSON.parse(stringData);
    const {nickname, uid, amount} = data;
    setReceiver(uid);
    setReceiverNickname(nickname);
    if (amount !== undefined) {
      setSendPoint(amount);
      setIsFixedAmount(true);
    }
    setStep(SendingSteps.Sending);
  };
  const handleError = (err) => {
    if (err.message === 'Permission denied') {
      alert('Please allow your camera permission!');
    }
  };

  const handleSend = () => {
    const apiURL = `${process.env.POINT_URL}/points/transactions`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    if(isNaN(sendPoint)) {
      toast(`The point format is invalid.`);
      return;
    }

    axios.post(apiURL, {points: Number(sendPoint), receiver}, {headers})
      .then((resp) => {
        const { success } = resp.data;
        if (success) {
          setStep(SendingSteps.Success);
          user.points = (user.points - sendPoint);
          setUser(user);
        }
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('transactions error: ', message);
        toast(message);
      })
  }
  const handleCancel = () => setPage(TradingPages.Init);
  const handleBackToScan = () => {
    setIsFixedAmount(false);
    setSendPoint(0);
    setStep(SendingSteps.Scan);
  }
  return(
  <Content>
    { step === SendingSteps.Scan ?
      <>
        <Title>{langText("TRADE_SEND_POINTS")}</Title>
        <Description>{langText("TRADE_SCAN_QR")}</Description>
        <QrReader
          delay={1000}
          onScan={handleScan}
          onError={handleError}
          style={{ 'maxWidth': '300px' }}
        />
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
     </> : "" }
    { step === SendingSteps.Sending ?
      <>
        <Title>{langText("TRADE_SEND_POINTS")}</Title>
        <div>{langText("TRADE_SENDING_QTY").replace("{points}", user.points)}</div>
        <div>{langText("TRADE_SENDING_TARGET")}{receiverNickname}</div>
        {isFixedAmount
          ? <div>{sendPoint}</div>
          : <input type="text" onChange={(e) => setSendPoint(e.target.value)}/>
        }
        <Button onClick={handleSend}>{langText("CONFIRM")}</Button>
        <Cancel onClick={handleBackToScan}>{langText("CANCEL")}</Cancel>
      </> : "" }
    { step === SendingSteps.Success ?
      <>
       <Title>{langText("TRADE_SENT_SUCCESS")}</Title>
       <Description>{langText("TRADE_SENT_DESC").replace("{sendPoint}", sendPoint).replace("{receiver}", receiverNickname)}</Description>
       <Description>{langText("TRADE_SENT_REMAINING").replace("{points}", (user.points - sendPoint))}</Description>
       <Button onClick={handleCancel}>{langText("DONE")}</Button>
      </>: "" }
  </Content>
  )
}

const ReceivedPage = ({uid, setPage}) => {
  const handleCancel = () => setPage(TradingPages.Init)
  return(
    <Content>
      <Title>{langText("TRADE_RECEIVING")}</Title>
      <Description>{langText("TRADE_PROVIDE_QR")}</Description>
      <QRCode
        value={uid}
        style={{ 'minWidth': '250px', 'minHeight': '250px' }}
      />
      <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
    </Content>
  )
}

ReceivedPage.defaultProps = {
  uid: 'unknown',
}

const TakingSteps = Object.freeze({
  'Scan': 0,
  'Success': 1,
});

const TakePage = ({setPage}) => {
  const [user, setUser] = useContext(UserContext);
  const [step, setStep] = useState(TakingSteps.Scan);
  const [points, setPoints] = useState();
  const handleScan = (data) => {
    if (data === null) return;
    const apiURL = `${process.env.POINT_URL}/points/redeem-code`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.post(apiURL, {code: JSON.parse(data).code},{ headers })
      .then((resp) => {
        const { success, data:{ points }} = resp.data;
        if (success) {
          setPoints(points);
          user.points = user.points + points;
          setUser(user);
          setStep(TakingSteps.Success);
        }
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('exchange redeem-code error: ', message);
        toast(message);
      });
  }
  const handleError = (err) => {
    console.error('take point scan error',err);
  }

  const handleCancel = () => setPage(TradingPages.Init)
  return(
    <Content>
      { step === TakingSteps.Scan ?
      <>
        <Title>{langText("TRADE_REDEEM_POINTS")}</Title>
        <Description>{langText("TRADE_REDEEM_QR")}</Description>
        <QrReader
          delay={1000}
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
        />
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
      </> : "" }
      { step === TakingSteps.Success ?
      <>
        <Title>{langText("TRADE_REDEEM_CONFIRM")}</Title>
        <Description>{langText("TRADE_REDEEM_DONE").replace("{points}", points)}</Description>
        <Button onClick={handleCancel}>{langText("DONE")}</Button>
      </> : "" }
    </Content>
  )
}

const TradingMain = styled.div``;

const TradingPages = Object.freeze({
  'Init': 0,
  'Send': 1,
  'Received': 2,
  'Take': 3
});

const Trading = ({setIsTradingOpen}) => {
  const [user, setUser] = useContext(UserContext);
  const [uid, setUid] = useState();
  const [page, setPage] = useState(TradingPages.Init);
  const switchSend = () => setPage(TradingPages.Send);
  const switchReceived = () => setPage(TradingPages.Received);
  const switchTake = () => setPage(TradingPages.Take);
  const handleCancel = () => setIsTradingOpen(false);

  useEffect(() => {
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { data:{ points, uid }} = resp.data;
        user.points = points;
        setUser(user);
        let qrCodeValue = {nickname: user.nickname, uid};
        setUid(JSON.stringify(qrCodeValue));
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get users error: ', message);
      });
  }, []);

  return (
    <TradingContainer>
      { page === TradingPages.Init ?
      <TradingMain>
        <Title>{langText("TRADE_TRADING_POINTS")}</Title>
        <Description>{langText("POINTS_OWNED").replace("{points}", user.points)}</Description>
        <Button onClick={switchSend}>
          <img src={SendIcon}/>
          {langText("TRADE_SEND")}
        </Button>
        <Button onClick={switchReceived}>
          <img src={ReceivedIcon}/>
          {langText("TRADE_RECEIVE")}
        </Button>
        <Button onClick={switchTake}>
          <img src={GiftIcon}/>
          {langText("TRADE_REDEEM")}
        </Button>
        <Cancel onClick={handleCancel}>{langText("CANCEL")}</Cancel>
      </TradingMain> : null }
      { page === TradingPages.Send ? <SendPage setPage={setPage}/> : null }
      { page === TradingPages.Received ? <ReceivedPage setPage={setPage} uid={uid}/> : null }
      { page === TradingPages.Take ? <TakePage setPage={setPage}/> : null }
    </TradingContainer>
  );
}

export default Trading;
