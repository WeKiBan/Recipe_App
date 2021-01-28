import React from 'react';

const SearchForm = (props) => {
  return (
    <form className="search-form" onSubmit={e => {
      e.preventDefault()
      props.searchRecipes()}}>
      <input
        className="search-bar"
        onChange={(e) => props.setQuery(e.target.value)}
        value={props.query}
        name="search"
        type="text"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
