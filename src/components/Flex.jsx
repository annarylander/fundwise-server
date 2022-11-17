import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  
  & > div,
  & > ul {
    flex: 2;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
