import styled from "styled-components";
 
const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: #FFF;
  border-top-left-radius: 43px;
  border-top-right-radius: 43px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 65px 0 65px;
  color: #121212;

  @media(min-width: 768px) {
    min-height: 623px;
    left: 30%;
    top: 30%;
    transform: translate(-25%, -25%);
    border-radius: 43px;
    padding: 2em 0;
  }
`;


export default Modal;
