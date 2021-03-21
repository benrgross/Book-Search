import React from "react";
import SearchFrom from "../components/SearchForm/SearchForm";
import Results from "../components/Results/Results";
import { useStoreContext } from "../utils/GlobalState";

function Search() {
  const [state] = useStoreContext();
  return (
    <div>
      <SearchFrom />
      {state.books.map((book) => (
        <Results
          key={book.title}
          title={book.title}
          authors={book.authors}
          img={book.img}
          description={book.description}
          infoLink={book.infoLink}
        />
      ))}
    </div>
  );
}

export default Search;
