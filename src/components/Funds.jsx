import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLink, { StyledLink, GreenLink } from "./NavLink";

const Funds = ({ funds, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-10 mt-10">
      {funds.map((fund, index) => (
        <div key={index}>
          <NavLink to={`/fund/${fund}`}>
            {" "}
            <p>{fund}</p>{" "}
          </NavLink>
        </div>
      ))}
    </ul>
  );
};

export default Funds;
