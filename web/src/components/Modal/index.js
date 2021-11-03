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

  @media(min-width: 1280px) {
    min-height: 623px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 43px;
    padding: 2em 0;
  }
`;


export default Modal;
