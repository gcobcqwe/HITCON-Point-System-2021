import React from "react";
import styled from "styled-components";
import Program from "./Program";
import { fakeSession as SessionInfo } from "../FakeSession";
import moment from "moment";

const Wrapper = styled.div`
  display:flex;
  border-bottom: 3px solid #D6D6D6;
  padding-bottom: 35px;
  margin-bottom: 55px;

  @media(max-width: 1040px) {
    flex-direction: column;
    padding-bottom: 25px;
    margin-bottom: 15px;
  }
`

const Title = styled.div`
  font-size: 36px;
`

const Link = styled.a`
  text-decoration: underline;
  color: #CECECE;
  font-size: 16px;
  align-self: flex-end;
  margin-left: 50px;
`


const Schedule = () => {
  let time = moment();
  let currentSessions = {};
  for (var session of SessionInfo.sessions) {
    if (time.isAfter(session.start) && time.isBefore(session.end)) {
      currentSessions[session.room] = session;
    }
  }

  console.log(currentSessions);
  console.log(SessionInfo);

  return (
    <div>
      <Wrapper>
        <Title>進行中議程</Title>
        <Link href="https://hitcon.org/2021/agenda/" target="_blank">查看完整議程表</Link>
      </Wrapper>
      <Program location="R0" title={currentSessions["R0"].zh.title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R0"].speakers.includes(s.id);
        }).map(function (element) {
          return element.zh.name;
        }).join(", ")
      } brief={currentSessions["R0"].zh.description} />

      <Program location="R1" title={currentSessions["R1"].zh.title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R1"].speakers.includes(s.id);
        }).map(function (element) {
          return element.zh.name;
        }).join(", ")
      } brief={currentSessions["R1"].zh.description} />

      <Program location="R2" title={currentSessions["R2"].zh.title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R2"].speakers.includes(s.id);
        }).map(function (element) {
          return element.zh.name;
        }).join(", ")
      } brief={currentSessions["R2"].zh.description} />

      <Program location="R3" title={currentSessions["R3"].zh.title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R3"].speakers.includes(s.id);
        }).map(function (element) {
          return element.zh.name;
        }).join(", ")
      } brief={currentSessions["R3"].zh.description} />
    </div>
  )
}

export default Schedule;
