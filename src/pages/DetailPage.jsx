import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "../components/Container.styled";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export default function DetailPage(props) {
  const { fundName } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:8000/fund/${fundName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.fund));
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <h2>{fundName} </h2>

      <h5>Fund holdings:</h5>

      <table class="table table-sm">
        <thead>
          <tr class="table-light">
            <th scope="col">Fund name</th>
            <th scope="col">Share</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        {detail &&
          detail.fundHoldings.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.companyName}</td>
                  <td>{item.shareOfFund}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </Container>
  );
}
