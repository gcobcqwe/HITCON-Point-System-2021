import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Program from "./Program";
import moment from "moment";
import axios from "axios";
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
`;

const Title = styled.div`
  font-size: 36px;
`;

const Link = styled.a`
  text-decoration: underline;
  color: #CECECE;
  font-size: 16px;
  align-self: flex-end;
  margin-left: 50px;
`;

const Schedule = () => {
  const streamProvider = 'https://hitcon.opass.app';
  const [user, setUser] = useContext(UserContext);
  const code = user.private_kktix_code;
  const sessionUrl = 'https://hitcon.org/2021/speaker/session.json';
  const [counter, setCounter] = useState(60);
  const [update, setUpdate] = useState(false);
  const [sourceUpdate, setSourceUpdate] = useState();
  const [currentSessions, setCurrentSessions] = useState({});
  const [sessionInfo, setSessionInfo] = useState();

  // For Testing
  const [testDate, setTestDate] = useState();
  const [testTime, setTestTime] = useState();

  const composeStreamLink = (room) => {
    return `${streamProvider}/${room}/${code}`;
  }

  const composeTranslationLink = (room) => {
    return `${streamProvider}/${room}-translate/${code}`;
  }

  const forceUpdate = () => {
    setSourceUpdate(!sourceUpdate);
    setCounter(0);
  }

  const changeDate = (e) => {
    console.log(e.target.value);
    setTestDate(e.target.value);
  }

  const changeTime = (e) => {
    console.log(e.target.value);
    setTestTime(e.target.value);
  }

  useEffect(() => {
    let time = setTimeout(() => setCounter((counter) => counter - 1), 1000);
    return () => clearTimeout(time);
  });

  useEffect(() => {
    if (counter === 0) {
      setCounter(60);
      setUpdate(!update);
    }
  }, [counter]);

  useEffect(() => {
    axios.get(sessionUrl)
      .then((resp) => {
        console.log('source: ', resp.data);
        setSessionInfo(resp.data);
      });
  }, [sourceUpdate]);

  useEffect(() => {
    if (sessionInfo === undefined) return;
    let _currentSessions = {};
    let time = moment(`${testDate} ${testTime}`);
    console.log({ sessionInfo });
    if (sessionInfo) {
      for (var session of sessionInfo.sessions) {
        if (time.isAfter(session.start) && time.isBefore(session.end)) {
          _currentSessions[session.room] = session;
        }
      }
      setCurrentSessions(_currentSessions);
      console.log({ currentSessions });
    }
  }, [sessionInfo, update, testDate, testTime]);

  return (
    <div>
      <Wrapper>
        <Title>{langText("SCHEDULE_TITLE")}</Title>
        <span>
          更新倒數:{counter}
          <button onClick={forceUpdate}>立即更新</button>
          <br /><br />
          自訂測試時間:
          <input type="date" onChange={changeDate} />
          <input type="time" onChange={changeTime} />
        </span>
        <Link href="https://hitcon.org/2021/agenda/" target="_blank">{langText("SCHEDULE_FULL_AGENDA")}</Link>
      </Wrapper>

      <Program location="R0" title={currentSessions["R0"]?.[LANG].title} speaker={
        sessionInfo?.speakers?.filter(function (s) {
          return currentSessions["R0"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R0"]?.[LANG].description} streamLink={composeStreamLink('r0')} translate={composeTranslationLink('r0')} />

      <Program location="R1" title={currentSessions["R1"]?.[LANG].title} speaker={
        sessionInfo?.speakers?.filter(function (s) {
          return currentSessions["R1"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R1"]?.[LANG].description} streamLink={composeStreamLink('r1')} translate={composeTranslationLink('r1')} />

      <Program location="R2" title={currentSessions["R2"]?.[LANG].title} speaker={
        sessionInfo?.speakers?.filter(function (s) {
          return currentSessions["R2"]?.speakers.includes(s.id);
        }).map(function (element) {
          return element[LANG].name || element["zh"].name;
        }).join(", ")
      } brief={currentSessions["R2"]?.[LANG].description} streamLink={composeStreamLink('r2')} translate={composeTranslationLink('r2')} />
    </div>
  )
}

export default Schedule;
