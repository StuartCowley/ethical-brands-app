import React from "react";
import { Link } from "react-router-dom";
import "../styles/search.css";

const Search = () => {
  return (
    <div className="search-component">
      <h2 className="search-title">Ethical Brands</h2>
      <form className="search-form">
        <div>
          <input type="text" className="search-input" />
        </div>
        <div>
          <button type="submit" className="search-button">
            <Link to="/search-results">SEARCH</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
