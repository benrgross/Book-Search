import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

// import API from "../../utils/API";

function Results({ title, authors, description, img, infoLink }) {
  const [state] = useStoreContext();
  return (
    <div className="container">
      <div className="card mb-3">
        {state.books.length > 1 ? (
          <div className="row no-gutters">
            <div className="col-md-4  d-flex justify-content-center">
              <img
                className="img-thumbnail"
                // style={{ maxHeight: "250px", marginTop: "40px" }}
                src={
                  img
                    ? img.thumbnail
                    : "https://www.google.com/search?q=thumbnail+placeholder&rlz=1C5CHFA_enUS894US894&sxsrf=ALeKk01crTI0o0O1lLsou0kRZbF0agmJdg:1616281867263&tbm=isch&source=iu&ictx=1&fir=eReb0uPJL5IvnM%252C7Sq9s2Xk0RzlYM%252C_&vet=1&usg=AI4_-kRGkZphwiEIUUHNUz0zpTb3HOKBZg&sa=X&ved=2ahUKEwim-7eU_7_vAhWtiOAKHfoXA_UQ9QF6BAgQEAE#imgrc=eReb0uPJL5IvnM"
                }
                alt={title}
              />
            </div>
            <div className="col-md-8">
              <button className="btn btn-success">Save Book</button>
              <a className="btn btn-success" href={infoLink} target="_blank">
                View Book
              </a>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"> {authors}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row no-gutters">
            <div className="col-md-4">
              <h1>RESULTS</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;
