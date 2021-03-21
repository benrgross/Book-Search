import React, { useRef } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import "./results.css";
// import API from "../../utils/API";

function Results() {
  const [state] = useStoreContext();
  console.log(state);

  const saveBook = async (book) => {
    const savedBook = {
      title: book.title,
      authors: book.authors,
      description: book.description,
      img: book.img.thumbnail,
      link: book.link,
    };
    try {
      const postBook = await API.saveBook(savedBook);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {state.results.map((book) => (
        <div>
          {state.results.length > 1 ? (
            <div className="card mb-3 shadow" key={book.link}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="book-header">
                    <h5 className="">{book.title}</h5>
                    <p className="card-text">{book.authors.join(", ")}</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="button container">
                    <button
                      className="btn btn-success save"
                      onClick={() => saveBook(book)}
                    >
                      Save Book
                    </button>
                    <a
                      className="btn btn-success"
                      href={book.infoLink}
                      target="_blank"
                    >
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
                        // style={{ maxHeight: "250px", marginTop: "40px" }}
                        src={
                          book.img
                            ? book.img.thumbnail
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
              <div className="col-md-4">
                <h1>Search a Book Title for Results</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Results;
