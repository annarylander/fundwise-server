import { createContext, useState, useEffect } from "react";

const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [detail, setDetail] = useState(null);

  const fetchFunds = async () => {
    const res = await fetch("http://localhost:8000/fund");
    console.log("fetched funds");
    const data = await res.json();
    console.log(data);
    setFunds(data.data);
    setLoading(false);
    console.log("fetch completed");
  };

  //   const fetchDetail = async () => {
  //     const res = await fetch(`http://localhost:8000/fund/${path}`);
  //     console.log("fetched details");
  //     const data = await res.json();
  //     console.log(data);
  //     setLoading(false);
  //   };

  return (
    <FundContext.Provider value={{ funds, loading, fetchFunds }}>
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
