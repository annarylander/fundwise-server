import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  color: ${({ color }) => color || "#000"};
  line-height: 0.6;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #1dce80;
  }
`;

const LightLink = styled(StyledLink)`
  color: #f3f6f6;
`;

export default function NavLink(props) {
  return (
    <>
      {props.light ? (
        <LightLink {...props}>{props.children}</LightLink>
      ) : (
        <StyledLink {...props}>{props.children}</StyledLink>
      )}
    </>
  );
}
