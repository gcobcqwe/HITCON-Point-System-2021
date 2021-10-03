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

const Header = () => (<header>HITCON 2021</header>);
const baseURL = "https://points-staging.hitcon.org/api/v1/users/me";

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYzMjYzNzYwMywiZXhwIjoxNjQwOTY2NDAwLCJzY29wZSI6Im9uZV9wYWdlIHBvaW50X3N5c3RlbSBjbGllbnQifQ.CU7fEJq2YB9U35E4AjFj-xv7s-0kT9YZAPXDUBB-2PM'
    }
    axios.get(baseURL, { headers })
      .then((response) => {
      setUser(response.data);
    });
  },[]); // [] represent run once.

  useEffect(() => {
    setAuthorized(true); // maybe need to check token or something;
  },[user]);

  return (
    <Wrapper>
      <Header />
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
