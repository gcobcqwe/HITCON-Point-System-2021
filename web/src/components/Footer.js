import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 41px;
  color: #EBEBEB;
  z-index: 1;
`

const Text = styled.div`
  margin-bottom: 20px;
`

const Link = styled.a`
  color: #EBEBEB;
  text-decoration: none;
`

const Footer = () => (
  <Wrapper>
    <Background />
    <Container>
      <Text>HITCON 2021</Text>
      <div>
        <Link href="https://fb.com/hitcon" target="_blank" rel="noreferrer">Facebook</Link>
        <span> | </span>
        <Link href="https://twitter.com/HacksInTaiwan" target="_blank" rel="noreferrer">Twitter</Link>
        <span> | </span>
        <Link href="https://blog.hitcon.org" target="_blank" rel="noreferrer">Blog</Link>
      </div>
    </Container>
  </Wrapper>
)

export default Footer;
