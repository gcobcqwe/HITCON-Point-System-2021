import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import Cookies from "js-cookie";

import CloseButton from "../CloseButton";
import Modal from "../Modal";
import { langText } from "../../lang";

import QRCodeImg from "../../public/qrcode.svg";

const Container = styled(Modal)`
  padding: 20px 15px 15px 20px;
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 65px 50px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.h3`
  color: #4B4B4B;
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

const Cancel = styled(Button)`
  display: flex;
  @media(min-width: 768px) {
    display: none;
  }
  background: none;
  color: #8D8D8D;
  padding-left: 10px;
  font-size: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    display: block;
    height: 100%;

    ${Title} {
      font-size: 28px;
      text-align: left;
    }

    ${Description} {
      font-size: 20px;
    }
  }
`;

const TableWrapper = styled.div`
  max-height: 60vh;
  overflow: auto;

  @media(min-width: 768px) {
    max-height: 35vh;
  }
`;

const Table = styled.table`
  position: relative;

  .statusText {
    color: #729b55;
  }

  .isUsed {
    background: #D0D0D0;

    .statusText {
      color: #b29d9c;
    }
  }

  th, td {
    padding: 15px 10px;
    box-sizing: border-box;
  }

  th {
    padding: 10px;
    z-index: 1;
    background: #002680;
    color: #fff;
    position: sticky;
    top: 0;
  }

  tr {
    background: #EDEDED;

    td:nth-child(1) {
      min-width: 85px;
      text-align: center;
    }
    td:nth-child(2) {
      min-width: 100px;
    }
    td:nth-child(3) {
      position: relative;
      max-width: 162px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding: 15px 40px 15px 10px;
      font-family: monospace;


      button {
        position: absolute;
        top: 7px;
        right: 0;
        background: none;
      }

      img {
        background: #fff;
        border: 4px solid #fff;
        border-radius: 5px;
        box-shadow: 0px 2px 4px #101010d9;
      }
    }
`;



const RedeemRow = ({ points, isUsed, code, setDisplayCode }) => {
  const handleShow = () => setDisplayCode(JSON.stringify({ code }));
  return (
    <tr className={isUsed ? "isUsed" : "notUsed"}>
      <td>{points}</td>
      <td className="statusText">{isUsed ? langText("REDEEM_STATE_SENT") : langText("REDEEM_STATE_AVAIABLE")}</td>
      <td>
        {code}
        <button onClick={handleShow}>
          <img src={QRCodeImg} />
        </button>
      </td>
    </tr>
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
      <CloseButton onClick={handleCancel}/>
      {step === RedeemSteps.Listing &&
        <Content>
          <Title>{langText("REDEEM_LIST_TITLE")}</Title>
          <Description>{langText("REDEEM_COUNTER").replace("{number}", redeems.filter((r) => {
            return r.is_used === false;
          }).length)}
          </Description>
          <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>{langText("REDEEM_VALUE")}</th>
                <th>{langText("REDEEM_STATE")}</th>
                <th>{langText("REDEEM_CODE")}</th>
              </tr>
            </thead>
            <tbody>
              {redeems.map((r, idx) => <RedeemRow key={idx} isUsed={r.is_used} code={r.code} points={r.points} setDisplayCode={setDisplayCode} />)}
            </tbody>
          </Table>
          </TableWrapper>
          <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
        </Content>}
      {step === RedeemSteps.ShowingCode &&
        <Content>
          <Title>{langText('REDEEM_TARGET')}</Title>
          <QRCode value={displayCode} />
          <Button onClick={handleFinish}>{langText("DONE")}</Button>
        </Content>}
    </Container>
  )
}


export default Redeem;
