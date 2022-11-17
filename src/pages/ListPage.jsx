import React, { useState, useEffect, useContext } from "react";
import Pagination from "../components/Pagination";
import Funds from "../components/Funds";
import "bootstrap/dist/css/bootstrap.min.css";
import FundContext from "../context/FundContext";
import { Container } from "../components/Container.styled";

export default function ListPage() {
  const { funds, loading, fetchFunds } = useContext(FundContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(30);

  useEffect(() => {
    console.log("use effect ran in listpage");
    fetchFunds();
  }, []);

  // Get current posts
  const indexOfLastFund = currentPage * fundsPerPage;
  const indexOfFirstFund = indexOfLastFund - fundsPerPage;
  const currentFund = funds.slice(indexOfFirstFund, indexOfLastFund);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1>Fonder</h1>
      <Funds funds={currentFund} loading={loading} />
      <Pagination
        fundsPerPage={fundsPerPage}
        totalFunds={funds.length}
        paginate={paginate}
      />
    </Container>
  );
}
