import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import Cookies from "js-cookie";
import Modal from "../Modal";
import { langText } from "../../lang";

const Container = styled(Modal)`
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

const Table = styled.table``;


const RedeemRow = ({points, isUsed, code, setDisplayCode}) => {
  const handleShow = () => setDisplayCode(code);
  return(
    <tr>
      <td>{points}</td>
      <td>{isUsed ? langText("REDEEM_STATE_SENT") : langText("REDEEM_STATE_AVAIABLE")}</td>
      <td>{code} | <button onClick={handleShow}>show</button></td>
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
        const { state, data: {message} } = error.response;
        console.error('get redeem-code error', message);
    });
  }, [step, displayCode]);


  useEffect(() => {
    if (displayCode !== null) {
      setStep(1);
    }
  },[displayCode]);

  const handleCancel = () => setIsRedeemOpen(false);
  const handleFinish = () => {
    setStep(0);
    setDisplayCode(null);
  }



  return(
  <Container>
  { step === 0 ?
    <Content>
      <Title>{langText("REDEEM_LIST_TITLE")}</Title>
      <Description>{langText("REDEEM_COUNTER").replace("{number}", redeems.filter((r) => {
        return r.is_used = false;
      }).length)}
      </Description>
      <Table>
        <thead>
          <tr>
            <th>{langText("REDEEM_VALUE")}</th>
            <th>{langText("REDEEM_STATE")}</th>
            <th>{langText("REDEEM_CODE")}</th>
          </tr>
        </thead>
        <tbody>
          {redeems.map((r, idx) => <RedeemRow key={idx} isUsed={r.is_used} code={r.code} points={r.points} setDisplayCode={setDisplayCode} />) }
        </tbody>
      </Table>
      <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
    </Content> : null }
    { step === 1 ?
    <Content>
      <Title>請出示給欲發送對象</Title>
      <QRCode value={displayCode} />
      <Button onClick={handleFinish}>{langText("DONE")}</Button>
    </Content> : null }
  </Container>
  )
}


export default Redeem;
