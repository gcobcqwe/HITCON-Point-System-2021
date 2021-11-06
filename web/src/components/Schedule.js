import React, { useContext } from "react";
import styled from "styled-components";
import Program from "./Program";
const SessionInfo = require('../session.json');
import moment from "moment";
import { langText, LANG } from "../lang";
import UserContext from '../UserContext.js';

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
  const streamProvider = 'https://hitcon.opass.app';
  const [user, setUser] = useContext(UserContext);
  const code = user.private_kktix_code;
  const composeStreamLink = (room) => {
    return `${streamProvider}/${room}/${code}`
  }
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
        <Title>{langText("SCHEDULE_TITLE")}</Title>
        <Link href="https://hitcon.org/2021/agenda/" target="_blank">{langText("SCHEDULE_FULL_AGENDA")}</Link>
      </Wrapper>

      <Program location="R0" title={currentSessions["R0"]?.[LANG].title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R0"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R0"]?.[LANG].description} streamLink={composeStreamLink('r0')} />

      <Program location="R1" title={currentSessions["R1"]?.[LANG].title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R1"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R1"]?.[LANG].description} streamLink={composeStreamLink('r1')} />

      <Program location="R2" title={currentSessions["R2"]?.[LANG].title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R2"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R2"]?.[LANG].description} streamLink={composeStreamLink('r2')} />

      {/* <Program location="R3" title={currentSessions["R3"]?.[LANG].title} speaker={
        SessionInfo.speakers.filter(function (s) {
          return currentSessions["R3"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R3"]?.[LANG].description} /> */}
    </div>
  )
}

export default Schedule;
