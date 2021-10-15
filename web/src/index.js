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

const Header = styled.header`
  font-size: 36px;
  margin-top: 93px;
  margin-bottom: 31px;
`;

const Main = styled.main`
  padding: 0 28px;

  @media(min-width: 1280px) {
    padding: 0 128px;
  }

  @media(min-width: 1366px) {
    padding: 0 168px;
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

const App = () => {
  const [authorized, setAuthorized] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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
      setAuthorized(false);
    });
  },[]); // monitor token change then trigger this

  return (
    <>
     <Main>
      <Header>HITCON 2021</Header>
      { authorized ?
        (<>
          <User />
          <Greeting
            title="歡迎來到 HITCON 2021"
            description="您已經登入,可以開始參觀本次大會的各項活動" />
          <HotTopic />
          <TopicList>
            <Topic />
            <Topic />
            <Topic />
            <Topic />
          </TopicList>
          <Schedule />
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
