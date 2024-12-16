// src/components/Search.js
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle input changes
  const handleInputChange = (e) => setQuery(e.target.value);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      className="input-group"
      onSubmit={handleSearch}
      style={{ width: "30%" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        class="btn btn-dark btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
