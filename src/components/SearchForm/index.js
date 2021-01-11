import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group search-widget">
        <div className="input-group mb-3">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Directory for an Employee"
            id="search"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
