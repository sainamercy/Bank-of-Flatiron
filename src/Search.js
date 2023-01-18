import React, { useState } from "react";

function Search({ onFormSubmit }) {
  // initializing state
  const [searchValue, setSearchValue] = useState("");

  // handling input value
  function handleValueChange(e) {
    setSearchValue(e.target.value);
  }

  // handling form submit
  function submit(e) {
    e.preventDefault();
    onFormSubmit(searchValue);
    // clearing input field
    setSearchValue("");
  }
  return (
    <form onSubmit={submit}>
      <input
        onChange={handleValueChange}
        value={searchValue}
        className="p-2"
        type="text"
        placeholder="search transaction"
      ></input>
      <button className="p-2 bg-red-200" type="submit">
        Search
      </button>
    </form>
  );
}
export default Search;
