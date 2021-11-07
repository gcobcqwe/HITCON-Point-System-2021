import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import Cookies from "js-cookie";
import TableScrollbar from 'react-table-scrollbar';
import Modal from "../Modal";
import { langText } from "../../lang";

import QRcodeImg from "../../public/qrcode.svg";

const Container = styled(Modal)`
  padding: 20px 15px 15px 20px;
  @media(min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  font-size: 36px;
  text-align: center;

  @media(min-width: 1280px) {
    padding-left: 30px;
  }
`;

const Description = styled.h3`
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
  display: flex;
  flex-direction: column;
  align-items: center;

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

const TableWrapper = styled.div`
  max-height: 60vh;
  overflow: auto;

  @media(min-width: 1280px) {
    max-height: 35vh;
  }
`;

const Table = styled.table`
  position: relative;

  .isUsed {
    background: #6b6b6b
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
      <td>{isUsed ? langText("REDEEM_STATE_SENT") : langText("REDEEM_STATE_AVAIABLE")}</td>
      <td>
        {code}
        <button onClick={handleShow}>
          <img src={QRcodeImg} />
        </button>
      </td>
    </tr>
  )
}

const Redeem = ({ setIsRedeemOpen }) => {
  const [step, setStep] = useState(0);
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
      setStep(1);
    }
  }, [displayCode]);

  const handleCancel = () => setIsRedeemOpen(false);
  const handleFinish = () => {
    setStep(0);
    setDisplayCode(null);
  }

  return (
    <Container>
      {step === 0 ?
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
        </Content> : null}
      {step === 1 ?
        <Content>
          <Title>{langText('REDEEM_TARGET')}</Title>
          <QRCode value={displayCode} />
          <Button onClick={handleFinish}>{langText("DONE")}</Button>
        </Content> : null}
    </Container>
  )
}


export default Redeem;
