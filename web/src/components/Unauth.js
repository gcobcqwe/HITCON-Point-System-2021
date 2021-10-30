import React, {useState} from "react";
import styled from "styled-components";
import Greeting from "./Greeting";
import CameraIcon from "../public/ionic-camera.svg";
import ArrorDownIcon from "../public/fa-arrow-down.svg";
import StepLinkIcon from "../public/awesome-link.svg";
import StepSearchIcon from "../public/awesome-search.svg";
import StepMailIcon from "../public/ionic-ios-mail.svg";

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
  margin: 2em 0;
  padding-left: 15px;
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

const Unauth = () => {
  const [isQRCode, setIsQRCode] = useState(true);
  const handleSwitch = () => setIsQRCode(!isQRCode);

  return(
    <>
      <Greeting
        title="歡迎來到 HITCON 2021"
        description="請登入來使用本次大會的活動，您可以在先前的「HITCON 2021 行前通知信」中找到登入連結！"
      />
      <Steps>
        <Step>
          <StepIcon src={StepMailIcon} />
          前往收件夾
        </Step>
        <Arrow src={ArrorDownIcon} />
        <Step>
          <StepIcon src={StepSearchIcon} />
          搜尋「HITCON 2021 行前通知信
        </Step>
        <Arrow src={ArrorDownIcon} />
        <Step>
          <StepIcon src={StepLinkIcon} />
          點選信中連結<br />進行登入
        </Step>
      </Steps>
      <Other>或透過以下方式登入</Other>
      <Methods>
        <Method>
          <Title>電子信箱</Title>
          <Desc>請輸入購票時使用的電子信箱<br />我們將會重新寄送登入連結給您</Desc>
          <Input />
          <Button>確認</Button>
        </Method>
        { isQRCode ?
        <Method>
          <Title>QR code</Title>
          <Desc>請掃描 KKTIX 票券上的 QR code 進行登入</Desc>
          <Camera><Icon src={CameraIcon} />開啟相機</Camera>
          <Switch onClick={handleSwitch}>手動輸入token</Switch>
        </Method>
        :
        <Method>
          <Title>輸入 Token</Title>
          <Desc>請輸入 KKTIX 票券上的 Token</Desc>
          <Input />
          <Button>確認</Button>
          <Switch onClick={handleSwitch}>掃描 QR code</Switch>
        </Method>
        }
      </Methods>
    </>
  )
}

export default Unauth;
