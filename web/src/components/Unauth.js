import React, {useState} from "react";
import styled from "styled-components";
import QrReader from 'react-qr-reader'
import Greeting from "./Greeting";
import CameraIcon from "../public/ionic-camera.svg";
import ArrorDownIcon from "../public/fa-arrow-down.svg";
import StepLinkIcon from "../public/awesome-link.svg";
import StepSearchIcon from "../public/awesome-search.svg";
import StepMailIcon from "../public/ionic-ios-mail.svg";
import { langText } from "../lang";

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 1280px) {
    flex-direction: row;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 20px;
  border-radius: 14px;
  border: 4px solid #154ED6;
  background: #19253A;
  box-sizing: border-box;
  width: 223px;
  min-height: 94px;
  margin: 20px 0;

  @media(min-width: 1280px) {
    font-size: 16px;
    min-height: 111px;
  }
`;

const StepIcon = styled.img`
  margin-right: 15px;
`;

const Other = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 2.5em 0;

  @media(min-width: 1280px) {
    text-align: left;
  }
`;


const Arrow = styled.img`
  width: 55px;
  height: 55px;
  filter: invert(23%) sepia(88%) saturate(2057%) hue-rotate(207deg) brightness(98%) contrast(91%);

  @media(min-width: 1280px) {
    transform: rotate(-90deg);
    margin: 0 25px;
  }
`;

const Methods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 1280px) {
    flex-direction: row;

  }
`;

const Method = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2em 2em;
  border-radius: 14px;
  background: #002680;
  margin-bottom: 3.5em;
  min-width: 358px;

  @media(min-width: 1280px) {
    width: 403px;
    padding: 0 4em 2em 4em;
    margin-right: 3.5em;
  }
;`

const Title = styled.h2`
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #fff;
`

const Desc = styled.div`
  text-align: center;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  box-shadow: none;
  border-radius: 20px;
  border: 0;
  margin: 2em 0;
  padding-left: 15px;
`;

const EmailInput = styled(Input)`
  :invalid {
    color: red;
  }
`;

const Button = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 22px;
  background: #154ED6;
  margin-bottom: 15px;
`;

const Camera = styled(Button)`
  display: flex;
  align-items: center;
  margin: 2em 0;
  font-size: 14px;
  color: #343434;
  background: #FFFFFF;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Switch = styled.div`
  color: #BABABA;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

const Modal = styled.div`
  position: fixed;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 29px;
  background: #fff;
  color: #000;
  width: 90%;
  max-width: 622px;
  box-sizing: border-box;
  padding: 0 1.5em 2em 1.5em;
  z-index: 5;


  ${Title} {
    border-color: #000;
    padding-top: 0.3em;
    padding-bottom: 1em;
    font-weight: bolder;
    font-size: 30px;
  }

  ${Button} {
    min-width: 117px;
    margin-top: 3em;
    justify-self: center;
    font-size: 20px;
    padding: 5px 20px;
  }

  @media(min-width: 1280px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const EmailConfirmModal = styled(Modal)``;
const QRCodeModal = styled(Modal)``;
const QRCodeReader = styled(QrReader)`
  min-width: 334px;
  min-height: 284px;
`;

const Unauth = () => {
  const [useQRCode, setUseQRCode] = useState(true);
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [qrData, setQrData] = useState();
  const [token, setToken] = useState();
  const [reader, setReader] = useState(false);

  const handleSwitch = () => setUseQRCode(!useQRCode);
  const handleEmailValue = (e) => setEmail(event.target.value);
  const handleTokenValue = (e) => setToken(event.target.value);
  const handleToken = () => {
    // TODO
    console.log("your kktix token: ", token);
  }
  const sendEmail = () => {
    // TODO call SendEmail API;
    setEmailConfirm(true);
  }
  const closeEmailComfirm = () => setEmailConfirm(false);
  const handleReader = () => setReader(!reader);
  const handleQRError = (err) => { console.log(err) }
  const handleQRScan = (data) => {
    if (data === null) return;
    // TODO deal with data
    setQrData(data);
    // TODO close reader and login
    // setReader(false)
    // window.location(....?token=token) ?
  }

  return(
    <>
      <Greeting
        title={langText("UNAUTH_GREETING_TITLE")}
        description={langText("UNAUTH_GREETING_DESC")}
      />
      <Steps>
        <Step>
          <StepIcon src={StepMailIcon} />
          {langText("UNAUTH_STEP_INBOX")}
        </Step>
        <Arrow src={ArrorDownIcon} />
        <Step>
          <StepIcon src={StepSearchIcon} />
          {langText("UNAUTH_STEP_SEARCH_MAIL")}
        </Step>
        <Arrow src={ArrorDownIcon} />
        <Step>
          <StepIcon src={StepLinkIcon} />
          {langText("UNAUTH_STEP_LOGIN")}
        </Step>
      </Steps>
      <Other>{langText("UNAUTH_ALTER_METHOD")}</Other>
      <Methods>
        <Method>
          <Title>{langText("UNAUTH_EMAIL_METHOD")}</Title>
          <Desc>{langText("UNAUTH_EMAIL_DESC")}</Desc>
          <EmailInput type="email" value={email} onChange={handleEmailValue}/>
          <Button onClick={sendEmail}>{langText("UNAUTH_EMAIL_SEND")}</Button>
        </Method>
        { useQRCode ?
        <Method>
          <Title>QR Code</Title>
          <Desc>{langText("UNAUTH_QRCODE_DESC")}</Desc>
          <Camera onClick={handleReader}><Icon src={CameraIcon} />{langText("UNAUTH_QRCODE_OPEN_CAM")}</Camera>
          <Switch onClick={handleSwitch}>{langText("UNAUTH_QRCODE_TOKEN")}</Switch>
        </Method>
        :
        <Method>
          <Title>{langText("UNAUTH_TOKEN_TITLE")}</Title>
          <Desc>{langText("UNAUTH_TOKEN_DESC")}</Desc>
          <Input type="text" value={token} onChange={handleTokenValue} />
          <Button onClick={handleToken}>{langText("CONFIRM")}</Button>
          <Switch onClick={handleSwitch}>{langText("UNAUTH_TOKEN_QRCODE")}</Switch>
        </Method>
        }
        { emailConfirm ?
          <EmailConfirmModal>
            <Title>{langText("UNAUTH_EMAIL_LINK_TITLE")}</Title>
            <Desc>{langText("UNAUTH_EMAIL_MATCH")}<br /><br />
              {email}<br /><br />
              {langText("UNAUTH_EMAIL_SENDING")} <br />
              <br /><br />
              {langText("UNAUTH_EMAIL_LINK_TITLE")}
            </Desc>
            <Button onClick={closeEmailComfirm}>{langText("CONFIRM")}</Button>
          </EmailConfirmModal> :
          null
        }
        { reader ?
          <QRCodeModal>
            <Title>
              {langText("UNAUTH_QRCODE_SCAN")}
              <button onClick={handleReader}>x</button>
            </Title>
            <Desc>{langText("UNAUTH_QRCODE_SCAN_KKTIX")}</Desc>
            <QRCodeReader
              delay={300}
              onError={handleQRError}
              onScan={handleQRScan}
            />
            <div>qrcode: {qrData}</div>
          </QRCodeModal> :
          null
        }
      </Methods>
    </>
  )
}

export default Unauth;
