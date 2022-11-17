import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0, 7;
    transform: scale(0.98);
  }

  ${(props) =>
    props.margin &&
    css`
      margin: 20px 20px;
    `}
`;

const GreenButton = styled(Button)`
  background: #1dce80;
  color: white;
`;

export default function NavButton(props) {
  return (
    <>
      {props.green ? (
        <GreenButton {...props}>{props.children}</GreenButton>
      ) : (
        <Button {...props}>{props.children}</Button>
      )}
    </>
  );
}
