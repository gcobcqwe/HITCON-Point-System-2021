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

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Greeting />
      <User />
      <Topic />
      <Topic />
      <Topic />
      <Schedule />
    </Wrapper>
  )
}


const App = () => {
  return (
    <>
      <Main />
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
