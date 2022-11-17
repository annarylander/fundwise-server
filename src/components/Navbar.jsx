import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo2.png";
import About from "./About";

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #1a2123;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const ExtendedContainer = styled.div``;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Inter, sans-serif;
  text-decoration: none;
  margin 10px;

  &:hover {
    opacity: 0, 7;
    transform: scale(0.98);
    color: #1dce80;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    display: none;
}

`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: large;
  font-family: Inter, sans-serif;
  text-decoration: none;
  margin 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Logo = styled.h1`
  color: #1dce80;
  margin: 20px;
  font-size: 30px;
  font-weight: 700;
  max-width: 180;
  height: auto;

  @media (min-width: 700px) {
  }
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: ponter;
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <div>
      <NavbarContainer extendNavbar={extendNavbar}>
        <InnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/">Hem</NavbarLink>
              <NavbarLink to="/about">Om</NavbarLink>
              <NavbarLink to="/fund">Fonder</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Logo>Fundwise</Logo>
          </RightContainer>
        </InnerContainer>
        {extendNavbar && (
          <ExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to={About}>About</NavbarLinkExtended>
            <NavbarLinkExtended to="/fund">Contact</NavbarLinkExtended>
          </ExtendedContainer>
        )}
      </NavbarContainer>
    </div>
  );
}
