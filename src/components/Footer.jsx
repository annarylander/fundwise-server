import React from "react";
import { Container } from "./Container.styled";
import { Flex } from "./Flex";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #55b77c;
  padding: 100px 0 60px;
  display: flex;
  justify-content: center;

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <Flex>
        <ul>
          <li>Mail</li>
        </ul>
        <ul>
          <li>About</li>
        </ul>

        <ul>
          <li>Contact</li>
        </ul>
      </Flex>
    </FooterStyled>
  );
}
