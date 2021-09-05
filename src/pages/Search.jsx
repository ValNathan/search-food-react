import React, { useState } from "react";
import SearchResult from "../components/SearchResult";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function getResults() {
    let url = `https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&action=process&json=1`;
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSearchResults(res.products);
      });
  }

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getResults();
          }}
        >
          Rechercher
        </button>
      </div>
      <div className="results">
        <ul>
          {searchResults.map((result) => {
            return (
              <li key={result.id} className="result-item">
                <SearchResult result={result} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
