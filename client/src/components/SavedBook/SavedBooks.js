import React, { useEffect } from "react";
import { REMOVE_BOOK, SET_SAVED_BOOK, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import "./saved.css";

function SavedBooks() {
  const [state, dispatch] = useStoreContext();

  const deleteSaved = async (id) => {
    try {
      const deleteSavedBook = API.deleteBook(id);
      console.log(`${deleteSavedBook} deleted from db`);
      dispatch({
        type: REMOVE_BOOK,
        _id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
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

  console.log("test", state.books[0]);

  useEffect(() => {
    getSavedBooks();
  }, []);

  return (
    <div className="container">
      {state.books.map((book) => (
        <div>
          {state.books.length >= 1 ? (
            <div className="card mb-3 shadow saved" key={book._id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="book-header">
                    <h5 className="">{book.title}</h5>
                    {book.authors ? (
                      <p className="card-text">{book.authors.join(", ")}</p>
                    ) : (
                      <p className="card-text">{book.authors}</p>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="button container">
                    <button
                      className="btn btn-success delete"
                      onClick={() => deleteSaved(book._id)}
                    >
                      Delete Book
                    </button>
                    <a className="btn btn-success" target="_blank">
                      View Book
                    </a>
                  </div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="body-border">
                  <div className="">
                    <div className="container img-container">
                      <img
                        className="img"
                        src={
                          book.img
                            ? book.img
                            : "https://www.google.com/search?q=thumbnail+placeholder&rlz=1C5CHFA_enUS894US894&sxsrf=ALeKk01crTI0o0O1lLsou0kRZbF0agmJdg:1616281867263&tbm=isch&source=iu&ictx=1&fir=eReb0uPJL5IvnM%252C7Sq9s2Xk0RzlYM%252C_&vet=1&usg=AI4_-kRGkZphwiEIUUHNUz0zpTb3HOKBZg&sa=X&ved=2ahUKEwim-7eU_7_vAhWtiOAKHfoXA_UQ9QF6BAgQEAE#imgrc=eReb0uPJL5IvnM"
                        }
                        alt={book.title}
                      />
                    </div>
                    <div className="">
                      <div className="card-body ">
                        <p className="card-text">{book.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row no-gutters">
              <div className="col-md-12 d-flex justify-content-center">
                <h1>No Saved Books</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SavedBooks;

//   <div className="container" key={id}>
//     <div className="card mb-3">
//       {/* {state.saved.length > 1 ? ( */}
//       <div className="row no-gutters">
//         <div className="col-md-4  d-flex justify-content-center">
//           <img
//             className="img-thumbnail"
//             src={
//               img
//                 ? img
//                 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEUnkY////8AiYcmkZAdjozd6+fd6ugAh4JwrqzF3dvH3dkulI8nkY0AiIIAi4goj48AjYMdkolfp6TF2doAhIPL4eFzr7ETjogkk42Pv72nzMuPwsSCurVdq6e93NvL5uVFm5qdy8nW6u3u9PX4/fquz89rrqeDuVjWAAABVUlEQVR4nO3YwW7TQBRAUY8zJHUz9oCT1gRogLbw/5+IHSHhKJUqsbAXc87Ou+crz7M0VQUAAAAAAAAAAAAAAAAAAAAAAAAAAAC8K29u5ZTWHmtBsftY3/q09lhLiv322oeLPm7Wnmw58S4c7uea5v7QhLvCGsSrU3Bsj/VQXIP9tP9imlQpPoRt2pfXoBpf/XH4PP0J4imE8KXA72BsUIWvu7FBGi4NYokN8rcQnuLUojuH72Wehe45hNf9uA7Spm7rWGKDzY/xBIRtTDm141oo8TvIw8+pQTgfu/455iIbxPbl0iCcTtNPIRfZoA8zfSyxQXueN3jpStyJ8XXeIPxqy2tQncK137m4BrHbHXf/tLu6vAbNoZmbnsYGaw+2oNj/vTW59pSLuktr2zfu0oa1x1rU5f70RpUK2gcAAAAAAAAAAAAAAAAAAAAAAAAAAADwf/4AR/sPlvUTLeMAAAAASUVORK5CYII="
//             }
//             alt={title}
//           />
//         </div>
//         <div className="col-md-8">
//           <button className="btn btn-success" onClick={() => deleteSaved(id)}>
//             Delete Book
//           </button>

//           <a className="btn btn-success" href={infoLink} target="_blank">
//             View Book
//           </a>

//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text"> {authors}</p>
//           </div>
//         </div>
//       </div>
//       {/* ) : (
//         <div className="row no-gutters">
//           <div className="col-md-4">
//             <h1>YOU HAVE NO SAVED BOOKS</h1>
//           </div>
//         </div>
//       )} */}
//     </div>
//   </div>
// );
