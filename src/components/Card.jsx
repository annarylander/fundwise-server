import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 50px 0;
  padding: 60px;

  p {
    line-height: 1.5;
  }
  img {
    width: 20%;
  }
  & > div {
    flex: 1;
  }
  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
