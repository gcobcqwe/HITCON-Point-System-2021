import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 40px;
`
const Title = styled.div`
  margin-bottom: 28px;
`;

const Description = styled.div`
  line-height: 26px;
`;

const Greeting = ({title, description}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

Greeting.defaultProps = {
  title: "歡迎來到 HITCON 2120",
  description: "7h1$ 1$ 4n 3x4mp£3 0ƒ £337 47 17$ ƒ1n3$7. 1 w1££ 74|{3 7h1$ 0pp0r7µn17¥ 70 r3m1nÐ ¥0µ 7h47 ¥0µ $h0µ£Ð 4£w4¥$ 937 ¥0µr |{1Ð$ p37 $p4¥3Ð 0r n3µ73r3Ð. N3v3r £34v3 h0m3 w17h0µ7 4 70w3£. 4nÐ n0 m4773r wh47 7h3¥ $4¥, 7h3r3 1$ n0 ([]\/\/ |_3\/3|_. |_0|_ h4x.", // Leet
}

export default Greeting;
