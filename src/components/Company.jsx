import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Company = () => {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/company")
      .then((res) => {
        console.log("company info ==>", res.data);
        setCompanyInfo(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("error in api pull", err);
      });
  }, []);

  return (
    <div className="homeSection">
      <h1 className="mt-9">Welcome to the the {companyInfo.name} World</h1>
      <h2>Founded by: {companyInfo.ceo}</h2>
      <Link to={"/rockets"}>
        {" "}
        <button type="button" className="mt-5 btn btn-danger">
          Browse Rockets
        </button>
      </Link>
    </div>
  );
};
export default Company;
