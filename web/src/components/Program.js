import React from "react";
import styled from "styled-components";
import { langText, LANG } from "../lang";

const Container = styled.div`
  display: flex;
  margin-bottom: 55px;

  @media(max-width: 1040px) {
    flex-direction: column;
  }
}
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 70px;
  line-height: 84px;
  border-right: 1px solid #B5B5B5;
  padding-right: 55px;
  margin-right: 55px;

  @media (max-width: 1040px) {
    border-right: none;
    border-bottom: 1px solid #B5B5B5;
    margin-right: 0px;
}
`;

const Context = styled.div`
  position: relative;
  border-bottom: 1px solid #707070;
  padding-bottom: 37.5px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 10px;
`;
const Speaker = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 15px;
`;

const Brief = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #B9B9B9;
`;

const Link = styled.button`
  position: relative;
  top: 5px;
  right: 0px;
  left: 10px;
  font-size: 12px;
  padding: 0 20px;

  a:link, a:visited {
    color: #262626;
  }

  @media(max-width: 1040px) {
    position: unset;
    margin-top: 15px;
  }
`

const Program = ({location, title, speaker, brief, streamLink}) => {
  return (
    <Container>
      <Location>{location}</Location>
      <Context>
        <Title>{title}</Title>
        <Speaker>{speaker}</Speaker>
        <Brief>{brief}</Brief>
          <Link><a href={streamLink} target="_blank" rel="noreferrer">前往議程直播 →</a></Link>
      </Context>
    </Container>
  )
};

Program.defaultProps = {
  location: "RX",
  title: langText("PROGRAM_NO_ONGOING_SESSION"),
  speaker: "",
  brief: langText("PROGRAM_CHECK_AGENDA"),
  link: "https://google.com/",
}

export default Program;
