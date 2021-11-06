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

import Exchange from "./components/Exchange"

import TopicTGImg from "./public/tg.png";
import TopicOnlineImg from "./public/online.png";
import TopicADVImg from "./public/online.png";
import TopicMpImg from "./public/mp.png";
import TopicVillageImg from "./public/online.png";

import UserContext from "./UserContext";

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
    > div:nth-child(1) {
      display: none;
    }
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


const Topics = ({eventToken}) => {
  const [token, setToken] = useState();
  const [tgLink, setTgLink] = useState([]);

  const onlineLink = [{
    link: process.env.ONLINE_URL,
    token: eventToken.online_token,
    text: "GO!"
  }]

  const mpLink = [{
    link: process.env.MP_INTRO_URL,
    text: langText("TOPIC_MP_INTRO_LINK")
  },{
    link: process.env.MP_ADV_URL,
    text: langText("TOPIC_MP_ADV_LINK")
  },{
    link: process.env.MP_DOCS_URL,
    text: langText("TOPIC_MP_DOC_LINK")
  }];

  const villageLink = [{
    link: "?",
    text: "GO!"
  }];

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies === undefined) return;
    setToken(tokenFromCookies);
  })

  useEffect(() => {
    if (token === undefined) return;
    const apiURL = `${process.env.POINT_URL}/tg/generate-code`;
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.post(apiURL, headers, { headers })
      .then((resp) => {
        const { code } = resp.data;
        setTgLink([{
          link: `https://t.me/hitcon_bot?start=${code}`,
          text: "GO!"
        }]);
      }).catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get tg code', message);
      });
  }, [token])

  return (
    <>
      <SectionTitle>{langText("TOPIC_SECTION_TITLE")}</SectionTitle>
      <SectionDesc>{langText("TOPIC_SECTION_DESC")}</SectionDesc>
      <HotTopic
        title={langText("TOPIC_ONLINE_TITLE")}
        description={langText("TOPIC_ONLINE_DESC")}
        imageSrc={TopicOnlineImg}
        links={onlineLink}
      />
      <TopicList>
        <Topic
          title={langText("TOPIC_ONLINE_TITLE")}
          description={langText("TOPIC_ONLINE_DESC")}
          imageSrc={TopicOnlineImg}
          links={onlineLink}
        >
        </Topic>
        <Topic
          title={langText("TOPIC_ADV_TITLE")}
          description={langText("TOPIC_ADV_DESC")}
          imageSrc={TopicADVImg}
          links={onlineLink}
        />
        <Topic
          title={langText("TOPIC_MP_TITLE")}
          description={langText("TOPIC_MP_DESC")}
          imageSrc={TopicMpImg}
          links={mpLink}
        />
        <Topic
          title={langText("TOPIC_CAT_TITLE")}
          description={langText("TOPIC_CAT_DESC")}
          imageSrc={TopicTGImg}
          links={tgLink}
        />
        <Topic
          title={langText("TOPIC_VILLAGE_TOPIC")}
          description={langText("TOPIC_VILLAGE_DESC")}
          imageSrc={TopicVillageImg}
          // links={villageLink}
        />
      </TopicList>
    </>
  )
}

const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [isTopic, setIsTopic] = useState(true);
  const [eventToken, setEventToken] = useState({});
  const [authorized, setAuthorized] = useState(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tokenFromParams = urlParams.get('token');
    if (tokenFromParams !== null) {
      setToken(tokenFromParams);
      Cookies.set('token', tokenFromParams);
      return true;
    }

    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies !== undefined) {
      setToken(tokenFromCookies);
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (token === undefined) return;
    const apiURL = `${process.env.POINT_URL}/users/me`;
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { success, data} = resp.data;
        if (success) {
          setUser(data);
          console.log('user data: ', data);
          return data;
        }
      }).catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get users error', message);
      })
  },[token]);

  useEffect(() => {
    if (token === undefined) return;
    const apiURL = `${process.env.POINT_URL}/users/me/events`;
    const headers = { 'Authorization': `Bearer ${token}` }
    axios.get(apiURL, { headers })
      .then((resp) => {
        const { success, data } = resp.data;
        if (success) setEventToken(data)
      }).catch((error) => {
        const { state, data: {message} } = error.response;
        console.error('get users error: ', message);
      });
  }, [token])

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Main>
          <Header>
            <Title>HITCON 2021</Title>
            <Language>
              <span onClick={() => { Cookies.set("lang", "en"); location.reload() }}>EN</span>|<span onClick={() => { Cookies.set("lang", "zh"); location.reload() }}>TW</span>
            </Language>
          </Header>
          {authorized ?
            (<>
              <User />
              <Tab>
                <button className={isTopic ? "active" : ""} onClick={() => setIsTopic(!isTopic)}>{langText("TAB_EVENT")}</button>
                <button className={isTopic ? "" : "active"} onClick={() => setIsTopic(!isTopic)}>{langText("TAB_AGENDA")}</button>
              </Tab>
              { isTopic ?
                <Topics eventToken={eventToken} /> :
                <Schedule />
              }
            </>) : <Unauth />
          }
        </Main>
      </UserContext.Provider>
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
