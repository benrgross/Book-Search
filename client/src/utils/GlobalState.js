import React, { useReducer, createContext, useContext } from "react";
import { LOADING, REMOVE_BOOK, RESULTS, SET_SAVED_BOOK } from "./actions";

// Don't forget to import all of your actions!
const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case RESULTS:
      return {
        books: action.results,
        loading: false,
      };
    case SET_SAVED_BOOK:
      console.log("action", action.saved);
      return {
        ...state,
        books: action.saved,
        loading: false,
      };
    case REMOVE_BOOK:
      return state;

    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [{}],
    book: {},
    saved: [],
    loading: true,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
