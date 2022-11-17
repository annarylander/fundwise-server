import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 680px) {
    padding: 20px;
  }
`;

export const newContainer = styled(Container)`
  background-color: #000;
`;
