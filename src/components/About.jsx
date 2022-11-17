import styled from "styled-components";
import NavButton, { Button, GreenButton } from "./NavButton";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  background-color: #1a2123;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  width: 50%;
  @media (max-width: 680px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #fff;
  @media (max-width: 680px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: #fff;
  line-height: 1.8;
`;

export default function About() {
  return (
    <Container>
      <TextDiv>
        <Title> Vad är Fundwise?</Title>
        <Text>
          Fundwise är en webbsida där du kan söka på en fond och se vilket
          aktieinnehav den har. När du ska köpa aktier kan du lätt jämföra olika
          fonder med varandra och se vad de har köpt, och på så sätt kan du ta
          rygg på de bästa investerarna! All data hämtas kvartalsvis från
          Finansinspektionen.
        </Text>
        <NavButton green> Kontakt </NavButton>
      </TextDiv>
    </Container>
  );
}
