import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: none;
    position: absolute;
    top: 50px;
    right: 50px;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    opacity: 1;
    background-color: #333;

    :hover {
        opacity: 0.3;
        cursor: pointer;
    }
    :before, :after {
        position: absolute;
        top: 5.5px;
        left: 14px;
        content: ' ';
        height: 20px;
        width: 3px;
        background-color: #fff;
    }
    :before {
        transform: rotate(45deg);
    }
    :after {
        transform: rotate(-45deg);
    }
    @media(min-width: 768px) {
        display: block;
    }
`;

const CloseButton = ({onClick}) => {
  return <Container onClick={onClick} />;
}

export default CloseButton;
