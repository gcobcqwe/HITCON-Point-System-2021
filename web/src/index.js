import axios from "axios";
import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import User from "./components/User";
import Greeting from "./components/Greeting";
import Topic from "./components/Topic";
import HotTopic from "./components/HotTopic";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./index.css";


const Main = styled.main`
  padding: 0 28px;
  margin-bottom: 10%;
  max-width: 1039px;

  @media(min-width: 1280px) {
    padding: 0 128px;
  }

  @media(min-width: 1366px) {
    padding: 0 168px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 93px;
  margin-bottom: 31px;
`;

const Title = styled.div`
  font-size: 34px;
`;

const SectionTitle = styled.div`
  font-size: 28px;
  border-bottom: 2px solid #fff;
  padding-bottom: 1.5em;
  margin: 1.5em 0;
`;

const SectionDesc = styled.div`
  font-size: 18px;
  margin: 1.5em 0 2em;
`;

const Language = styled.div`
  display: flex;
  font-size: 22px;
  align-items: center;
  span {
    cursor: pointer;
    padding: 0 10px;
  }

`;



const TopicList = styled.div`
  max-width: 1030px;
  @media(min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Tab = styled.div`
  margin-bottom: 43px;
  display: flex;
  border-radius: 8px;
  max-width: 406px;
  background: #0C2758;
  button {
    flex-grow: 1;
    color: #fff;
    font-size: 24px;
    padding: 0.3em;
    border-radius: 8px;
    background: #0C2758;
  }

  button.active {
    background: #154ED6;
  }
`;

const Topics = () => {
  return(
    <>
     <SectionTitle>主題活動</SectionTitle>
     <SectionDesc>HITCON Online、駭客貓歷險記、煉蠱等活動，建議使用電腦參與。</SectionDesc>
     <HotTopic />
     <TopicList>
       <Topic />
       <Topic />
       <Topic />
       <Topic />
      </TopicList>
    </>
  )
}


const App = () => {
  const [authorized, setAuthorized] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isTopic, setIsTopic] = useState(true);

  const handleTab = () => {
    setIsTopic(!isTopic);
  }
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    setToken(token);
  },[]);

  useEffect(() => {
    if (!token) return;
    const baseURL = "https://points-staging.hitcon.org/api/v1/users/me";
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(baseURL, { headers })
      .then((response) => {
      setUser(response.data)
      setAuthorized(true);
    }).catch((error) => {
      console.log('get users error',error)
      setAuthorized(false);
    });
  },[token]); // monitor token change then trigger this

  return (
    <>
     <Main>
      <Header>
        <Title>HITCON 2021</Title>
        <Language>
          <span>中</span>|<span>Eng</span>
        </Language>
    </Header>
      { authorized ?
        (<>
          <User />
          <Tab>
           <button className={isTopic ? "active" : ""} onClick={handleTab}>主題活動</button>
           <button className={isTopic ? "": "active"} onClick={handleTab}>議程資訊</button>
          </Tab>
          { isTopic ? <Topics/> : <Schedule />}
        </>) :
        (<>
          <Greeting
            title="歡迎來到 HITCON 2021"
            description="需登入才能取用本次大會的活動，您可以在先前的「HITCON 2021 行前通知信」中找到登入連結！"/>
          <h1>scan qrcode or resend email</h1>
        </>)
      }
      </Main>
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
