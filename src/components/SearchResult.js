/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/searchresult.css";
import "../styles/infocard.css";
import { FaAngleLeft } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchResult = ({
  name,
  category,
  ownership,
  revenue,
  anTesting,
  anInfo,
  envScore,
  envInfo,
  labScore,
  labInfo,
  philDonate,
  philInfo,
  newsSource,
  newsHeadline,
  totalScore,
}) => {
  return (
    <div className="search-results">
      <Link to="/">
        <button type="submit" className="search-results_button">
          <FaAngleLeft className="search-results_arrow" />
        </button>
      </Link>
      <div className="search-results_content">
        <h3>Company Logo</h3>
        <div className="info">
          <div>{`${name}, ${category}`}</div>
          <div>Revenue: {revenue}</div>
          <div>{ownership}</div>
        </div>
        <div className="info-card">
          <div>Animal Testing: {`${anTesting}, ${anInfo}`}</div>
        </div>
        <div className="info-card">
          <div>Environment: {`${envInfo}, ${envScore}`}</div>
        </div>
        <div className="info-card">
          <div>Labour: {`${labInfo}, ${labScore}`}</div>
        </div>
        <div className="info-card">
          <div>Philanthropy: {`${philInfo}, ${philDonate}`}</div>
        </div>
        <div className="info-card">
          <a href={newsSource}>News: {newsHeadline}</a>
        </div>
        <div>Score: {totalScore}</div>
      </div>
    </div>
  );
};

export default SearchResult;
