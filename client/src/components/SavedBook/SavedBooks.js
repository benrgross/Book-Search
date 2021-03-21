import React from "react";
import { REMOVE_BOOK } from "../../utils/actions";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";

function SavedBooks({ title, authors, description, img, infoLink, id }) {
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

  return (
    <div className="container" key={id}>
      <div className="card mb-3">
        {/* {state.saved.length > 1 ? ( */}
        <div className="row no-gutters">
          <div className="col-md-4  d-flex justify-content-center">
            <img
              className="img-thumbnail"
              src={
                img
                  ? img
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEUnkY////8AiYcmkZAdjozd6+fd6ugAh4JwrqzF3dvH3dkulI8nkY0AiIIAi4goj48AjYMdkolfp6TF2doAhIPL4eFzr7ETjogkk42Pv72nzMuPwsSCurVdq6e93NvL5uVFm5qdy8nW6u3u9PX4/fquz89rrqeDuVjWAAABVUlEQVR4nO3YwW7TQBRAUY8zJHUz9oCT1gRogLbw/5+IHSHhKJUqsbAXc87Ou+crz7M0VQUAAAAAAAAAAAAAAAAAAAAAAAAAAAC8K29u5ZTWHmtBsftY3/q09lhLiv322oeLPm7Wnmw58S4c7uea5v7QhLvCGsSrU3Bsj/VQXIP9tP9imlQpPoRt2pfXoBpf/XH4PP0J4imE8KXA72BsUIWvu7FBGi4NYokN8rcQnuLUojuH72Wehe45hNf9uA7Spm7rWGKDzY/xBIRtTDm141oo8TvIw8+pQTgfu/455iIbxPbl0iCcTtNPIRfZoA8zfSyxQXueN3jpStyJ8XXeIPxqy2tQncK137m4BrHbHXf/tLu6vAbNoZmbnsYGaw+2oNj/vTW59pSLuktr2zfu0oa1x1rU5f70RpUK2gcAAAAAAAAAAAAAAAAAAAAAAAAAAADwf/4AR/sPlvUTLeMAAAAASUVORK5CYII="
              }
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <button className="btn btn-success" onClick={() => deleteSaved(id)}>
              Delete Book
            </button>

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
        {/* ) : (
          <div className="row no-gutters">
            <div className="col-md-4">
              <h1>YOU HAVE NO SAVED BOOKS</h1>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default SavedBooks;
