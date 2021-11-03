import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import User from "./components/User";
import Topic from "./components/Topic";
import HotTopic from "./components/HotTopic";
import Schedule from "./components/Schedule";
import Unauth from "./components/Unauth";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import { langText, LANG } from "./lang";
import "./index.css";


const Main = styled.main`
  padding: 0 28px;
  margin: 0 auto;
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
  return (
    <>
      <SectionTitle>{langText("TOPIC_SECTION_TITLE")}</SectionTitle>
      <SectionDesc>{langText("TOPIC_SECTION_DESC")}</SectionDesc>
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
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isTopic, setIsTopic] = useState(true);

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies !== undefined) {
      setToken(tokenFromCookies);
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const token = urlParams.get('token');
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((response) => {
        setUser(response.data)
        setAuthorized(true);
        Cookies.set('token', token);
      }).catch((error) => {
        console.log('get users error', error);
        Cookies.remove('token');
        setAuthorized(false);
      });
  }, [token]);

  return (
    <>
      <Main>
        <Header>
          <Title>HITCON 2021</Title>
          <Language>
            <span onClick={() => { Cookies.set("lang", "zh"); location.reload() }}>中</span>|<span onClick={() => { Cookies.set("lang", "en"); location.reload() }}>Eng</span>
          </Language>
        </Header>
        {authorized ?
          (<>
            <User {...user} />
            <Tab>
              <button className={isTopic ? "active" : ""} onClick={() => setIsTopic(!isTopic)}>{langText("TAB_EVENT")}</button>
              <button className={isTopic ? "" : "active"} onClick={() => setIsTopic(!isTopic)}>{langText("TAB_AGENDA")}</button>
            </Tab>
            {isTopic ? <Topics /> : <Schedule />}
          </>) : <Unauth />
        }
      </Main>
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
