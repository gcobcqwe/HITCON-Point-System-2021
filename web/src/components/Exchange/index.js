import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import Modal from "../Modal";


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

const Table = styled.table`

`


const CouponPage = ({setPage}) => {
  const handleCancel = () => setPage(0);
  return(
    <Content>
      <Title>擁有的兌換券</Title>
      <Description>大會點數可用於兌換 HITCON 線上賣場折價券，兌換期間開放至 XX/XX，請於截止日前兌換完畢。</Description>
      <Table>
        <thead>
          <tr>
            <th>金額</th>
            <th>有效期限</th>
            <th>兌換券代碼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>2021/01/02</td>
            <td>lkxjcvlkjxcvl;lks;ldkf</td>
          </tr>
          <tr>
            <td>123</td>
            <td>2021/01/02</td>
            <td>lkxjcvlkjxcvl;lks;ldkf</td>
          </tr>
          <tr>
            <td>123</td>
            <td>2021/01/02</td>
            <td>lkxjcvlkjxcvl;lks;ldkf</td>
          </tr>
          <tr>
            <td>123</td>
            <td>2021/01/02</td>
            <td>lkxjcvlkjxcvl;lks;ldkf</td>
          </tr>
        </tbody>
      </Table>
      <Button><a href="#">HITCON線上賣場</a></Button>
      <Cancel onClick={handleCancel}>返回</Cancel>
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

const Coupon = ({value, cost, setTargetCoupon}) => {
  const handleExchange = () => {
    setTargetCoupon({value, cost});
  }
  return(
    <Wrapper>
     <Info>
       <Value>{value} $折價券</Value>
       <Cost>需要 {cost}P</Cost>
     </Info>
     <Action onClick={handleExchange}>兌換</Action>
    </Wrapper>
  )
}

const ExchangePage = ({points, setPage}) => {
  const [step, setStep] = useState(0);
  const [targetCoupon, setTargetCoupon] = useState(null);
  const handleExchange = () => {
    // TODO API if ok
    setStep(2);
  };
  const handleBack = () => setStep(0);
  const handleCancel = () => setPage(0);
  const couponData = {
    value: 100,
    cost: 300,
  }

  useEffect(()=> {
    if (targetCoupon === null) return;
    setStep(1);
  }, [targetCoupon])
  return (
    <>
    { step === 0 ?
      <Content>
        <Title>可兌換項目</Title>
        <List>
          { Array(20).fill(0).map((key, index) => <Coupon key={index} {...couponData} setTargetCoupon={setTargetCoupon} />) }
        </List>
        <Cancel onClick={handleCancel}>返回</Cancel>
      </Content> : null }
    { step === 1 ?
      <Content>
        <Title>確認兌換</Title>
        <div>您即將使用 {targetCoupon.cost} 點兌換</div>
        <div>「 {targetCoupon.value} $折價券 」</div>
        <div>完成後將剩餘 3000 點</div>
        <Cancel onClick={handleBack}>取消</Cancel>
        <Button onClick={handleExchange}>確認</Button>
      </Content> : null }
    { step === 2 ?
      <Content>
        <Title>兌換完成</Title>
        <div>兌換券代碼可於「擁有的兌換券」中確認 請於效期內兌換完成</div>
        <Button onClick={handleBack}>完成</Button>
      </Content> : null }
    </>
  )
}

const Exchange = ({setIsExchangeOpen}) => {
  const [points, setPointes] = useState(() => {
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const token = Cookies.get('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { data:{ points }} = resp.data;
        return parseInt(points, 10);
      })
      .catch((error) => {
        console.error('get users error', error);
      });
  });
  const [page, setPage] = useState(0);
  const switchCoupon = () => setPage(1);
  const switchExchange = () => setPage(2);
  const handleCancel = () => setIsExchangeOpen(false);
  return(
    <Container>
      { page === 0 ?
        <>
          <Title>點數兌換</Title>
          <Description>您目前共有 {points} 點</Description>
          <Button onClick={switchCoupon}>
            擁有的兌換券
          </Button>
          <Button onClick={switchExchange}>
            可兌換的項目
          </Button>
          <Cancel onClick={handleCancel}>返回</Cancel>
        </> : null }
      { page === 1 ? <CouponPage points={points} setPage={setPage} /> : null }
      { page === 2 ? <ExchangePage points={points} setPage={setPage} /> : null }
    </Container>
  )
}

export default Exchange;
