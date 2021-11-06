import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import Cookies from "js-cookie";
import Modal from "../Modal";
import { langText } from "../../lang";
import ReactHtmlParser from "react-html-parser"
import UserContext from '../../UserContext.js';

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

const CouponRow = ({code, changedAt, couponsType}) => {
  const [,value] = couponsType.name.split("_");
  const time = new Date(changedAt);
  return(
    <tr>
      <td>{value}</td>
      <td>{`${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()}`}</td>
      <td>{code} | <button onClick={() => {navigator.clipboard.writeText(code)}}>copy</button></td>
    </tr>
  )
}


const CouponPage = ({ setPage }) => {
  const [coupons, setCoupons] = useState([]);
  useEffect(()=>{
    const apiURL = `${process.env.POINT_URL}/coupons`;
    const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { success, data } = resp.data;
        console.log('coupons: ', data);
        setCoupons(data);
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get coupons error: ', message);
    });
  },[]);

  const handleCancel = () => setPage(0);
  return (
    <Content>
      <Title>{langText("COUPON_YOUR_COUPON")}</Title>
      <Description>{langText("COUPON_DEADLINE_NOTICE")}</Description>
      <Table>
        <thead>
          <tr>
            <th>{langText("COUPON_PRICE")}</th>
            <th>{langText("COUPON_CHANGED_DATE")}</th>
            <th>{langText("COUPON_TOKEN")}</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((c, idx) => <CouponRow key={idx} changedAt={c.updated_at} code={c.code} couponsType={c.coupons_type} />) }
        </tbody>
      </Table>
      <Button><a href="#">{langText("COUPON_HITCON_STORE")}</a></Button>
      <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
    </Content>
  )
}

const List = styled.div`
  height: 440px;
  width: 100%;
  background-color: #EBEBEB;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin: 1em 0;
  }
  box-shadow: inset 0 0 5px #000000;
  ::-webkit-scrollbar {
    back
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #072680;
  box-sizing: border-box;
  color: #fff;
  width: 309px;
  height: 88px;
  border-radius: 11px;
  box-shadow: 0px 3px 6px #00000096;
`;
const Info = styled.div`
  flex-grow: 3;
  padding: 15px 0 15px 20px;
  font-size: 22px;
`;

const Value = styled.div``;
const Cost = styled.div`
  font-size: 16px;
  color: #DDDDDD;
`;

const Action = styled.div`
  flex-grow: 1;
  padding: 15px 15px;
  padding-top: 25px;
  border-left: 1px solid #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

const Coupon = ({ name, points, setTargetCoupon }) => {
  const setCoupon = () => {
    setTargetCoupon({ name, points });
  }
  const value = name.split('_')[1];
  return (
    <Wrapper>
      <Info>
        <Value>{value}{langText("COUPON_NAME")}</Value>
        <Cost>{langText("COUPON_COST")} {points}P</Cost>
      </Info>
      <Action onClick={setCoupon}>{langText("COUPON_EXCHANGE")}</Action>
    </Wrapper>
  )
}

const ExchangePage = ({ points, setPage }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useContext(UserContext);
  const [step, setStep] = useState(0);
  const handleBack = () => setStep(0);
  const handleCancel = () => setPage(0);
  const [targetCoupon, setTargetCoupon] = useState(null);
  const [couponList, setCouponList] = useState([]);
  const handleExchange = (remainingPoints) => {
    const apiURL = `${process.env.POINT_URL}/coupons`;
    const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
    axios.post(apiURL,{ type: targetCoupon.name }, { headers })
      .then((resp) => {
        const { success, data } = resp.data;
        console.log(success);
        console.log(data);
        user.points = remainingPoints;
        setUser(user);
      }).catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('exchange Coupons error: ', message);
    });
    setStep(2);
  };

  useEffect(() => {
    const apiURL = `${process.env.POINT_URL}/coupons/types`;
    const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { success, data } = resp.data;
        setCouponList(data);
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get coupons/types error: ', message);
    });
  },[]);

  useEffect(() => {
    if (targetCoupon === null) return;
    setStep(1);
  }, [targetCoupon])
  return (
    <>
      {step === 0 ?
        <Content>
          <Title>{langText("COUPON_EXCH_ITEM")}</Title>
          <List>
            {couponList.map((c, index) => <Coupon name={c.name} points={c.points} key={index}  setTargetCoupon={setTargetCoupon} />)}
          </List>
          <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
        </Content> : null}
      {step === 1 ?
        <Content>
          <Title>{langText("COUPON_CONFIRM_EXCH")}</Title>
          {ReactHtmlParser(langText("COUPON_USING_POINTS")
            .replace("{cost}", targetCoupon.points)
            .replace("{value}", targetCoupon.name.split('_')[1])
            .replace("{points}", (points - targetCoupon.points)))}
          <Cancel onClick={handleBack}>{langText("CANCEL")}</Cancel>
          <Button onClick={() => handleExchange((points - targetCoupon.points))}>{langText("CONFIRM")}</Button>
        </Content> : null}
      {step === 2 ?
        <Content>
          <Title>{langText("COUPON_EXCH_DONE")}</Title>
          <div>{langText("COUPON_DONE_NOTICE")}</div>
          <Button onClick={handleBack}>{langText("DONE")}</Button>
        </Content> : null}
    </>
  )
}

const Exchange = ({ setIsExchangeOpen }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useState(0);
  const switchCoupon = () => setPage(1);
  const switchExchange = () => setPage(2);
  const handleCancel = () => setIsExchangeOpen(false);

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies === undefined) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const tokenFromParams = urlParams.get('token');
      if (tokenFromParams !== undefined) setToken(tokenFromParams)
    } else {
      setToken(tokenFromCookies);
    }
  })

  useEffect(() => {
    if (token === undefined) return;
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const headers = { 'Authorization': `Bearer ${Cookies.get('token')}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { data } = resp.data;
        user.points = data.points;
        setUser(user);
      })
      .catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get users error: ', message);
      });
  },[token])

  return (
    <Container>
      {page === 0 ?
        <>
          <Title>{langText("COUPON_POINTS_EXCH")}</Title>
          <Description>
            {langText("POINTS_OWNED").replace("{points}", user.points)}
          </Description>
          <Button onClick={switchCoupon}>
            {langText("COUPON_YOUR_COUPON")}
          </Button>
          <Button onClick={switchExchange}>
            {langText("COUPON_EXCH_ITEM")}
          </Button>
          <Cancel onClick={handleCancel}>{langText("BACK")}</Cancel>
        </> : null}
      {page === 1 ? <CouponPage points={user.points} setPage={setPage} /> : null}
      {page === 2 ? <ExchangePage points={user.points} setPage={setPage} /> : null}
    </Container>
  )
}

export default Exchange;
