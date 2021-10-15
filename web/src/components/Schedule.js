import React from "react";
import styled from "styled-components";
import Program from "./Program";

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
  return (
    <div>
      <Wrapper>
        <Title>進行中議程</Title>
        <Link href="https://hitcon.org/2021/agenda/" target="_blank">查看完整議程表</Link>
      </Wrapper>
      <Program />
      <Program />
      <Program />
    </div>
  )
}

export default Schedule;
