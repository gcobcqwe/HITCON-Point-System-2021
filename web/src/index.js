import axios from "axios";
import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import User from "./components/User";
import Greeting from "./components/Greeting";
import Topic from "./components/Topic";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./index.css";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1039px;
  @media (max-width: 1040px) {
    margin: 0 5%;
  }

  @media(min-width: 1918px) {
    margin: 0 0 0 15%;
  }

  // Sepreate each section(header, user, topic, schedule)
  > div {
    margin-bottom: 71px;
  }
`

const Header = styled.header`
  header {
  font-family: TSTAR;
  font-size: 60px;
  margin-top: 151px;
  margin-bottom: 31px;
}
`;

const App = () => {
  const [authorized, setAuthorized] = useState(false);
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
  },[token]); // monitor token change then trigger this

  return (
    <Wrapper>
      <Header>HITCON 2021</Header>
      { authorized ?
        (<>
          <Greeting
            title="歡迎來到 HITCON 2021"
            description="您已經登入,可以開始參觀本次大會的各項活動" />
          <User {...user} />
          <Topic />
          <Topic />
          <Topic />
          <Schedule />
        </>) :
        (<>
          <Greeting
            title="歡迎來到 HITCON 2021"
            description="需登入才能取用本次大會的活動，您可以在先前的「HITCON 2021 行前通知信」中找到登入連結！"/>
          <h1>scan qrcode or resend email</h1>
        </>)
      }
      <Footer />
    </Wrapper>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
