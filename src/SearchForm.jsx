import React from "react";
import { useGlobalContext } from "./context";

let URL = "ak";
const SearchForm = (URL) => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
    //URL = `https://api.unsplash.com/search/photos?client_id=PWqPmNRHhgdpwwDmQQJycFY-egRtSpSA632n3wXfIVw&query=${searchValue}`;
  };

  return (
    <section className="container2" onSubmit={handleSubmit}>
      <h1 className="title">Unsplash Images</h1>
      <form action="">
        <input type="text" placeholder="cat" name="search" />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
