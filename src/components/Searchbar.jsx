import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchContainer = styled.div`
  position: relative;
  width: 360px;
  height: 48px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  padding-left: 5px;
`;

const SearchInput = styled.input`
  border: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  border: 1px solid transparent;
  padding-left: 40px;
`;

const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: 1;
  cursor: pointer;
  background: none;
`;

export default function Searchbar(props) {
  return (
    <div>
      <SearchContainer>
        <IconButton>
          <BiSearchAlt2 />
        </IconButton>
        <SearchInput />
      </SearchContainer>
    </div>
  );
}
