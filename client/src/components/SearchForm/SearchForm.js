import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { LOADING, RESULTS } from "../../utils/actions";

function SearchForm() {
  const queryRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: LOADING,
    });
    try {
      const query = queryRef.current.value;
      const {
        data: { items },
      } = await API.searchTitle(query);

      const results = items.map((item) => {
        return {
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          img: item.volumeInfo.imageLinks,
          link: item.volumeInfo.infoLink,
        };
      });
      dispatch({
        type: RESULTS,
        results: results,
      });
      console.log("search", state);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Search Book by Title</label>
          <input
            ref={queryRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
