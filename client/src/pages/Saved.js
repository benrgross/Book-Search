import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import SavedBooks from "../components/SavedBook/SavedBooks";
import { LOADING, SET_SAVED_BOOK } from "../utils/actions";
import API from "../utils/API";

function Saved() {
  const [state, dispatch] = useStoreContext();

  console.log(state.book);
  const getSavedBooks = async () => {
    dispatch({ type: LOADING });
    try {
      const { data } = await API.getBooks();

      dispatch({
        type: SET_SAVED_BOOK,
        saved: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedBooks();
  }, []);

  return (
    <div>
      <SavedBooks />
    </div>
  );
}

export default Saved;
