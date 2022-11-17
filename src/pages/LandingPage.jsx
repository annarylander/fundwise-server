import React, { useState } from "react";
import About from "../components/About";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import NavLink, { StyledLink } from "../components/NavLink";

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.95;
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
`;

const SearchResult = styled.div`
  width: 260px;
  text-align: left;
  z-index: 1;
  position: relative;
`;

const SearchBar = styled.div`
  position: relative;
  width: 260px;
  height: 48px;
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  padding-left: 5px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  position: relative;
`;

export default function LandingPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { query };
    console.log(query);
    const url = "http://localhost:8000/fund/search";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  }

  return (
    <>
      <HeaderContainer>
        <TextDiv>
          <Title>Sök på en fond</Title>
          <Text>Se vad den har för aktieinnehav</Text>

          <SearchBar>
            <form onSubmit={handleOnSubmit}>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></Input>

              <SearchButton type="submit">
                {" "}
                <BiSearchAlt2 />
              </SearchButton>
            </form>
          </SearchBar>

          {result &&
            result.slice("").map((fund, index) => {
              return (
                <SearchResult key={index}>
                  <NavLink light to={`/fund/${fund}`}>
                    {fund}
                  </NavLink>
                </SearchResult>
              );
            })}
        </TextDiv>
      </HeaderContainer>
      <div id="a">
        <About id={"about"} />
      </div>
    </>
  );
}
