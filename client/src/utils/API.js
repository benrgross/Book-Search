import axios from "axios";

export default {
  // Gets all posts
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the post with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the post with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a post to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  searchTitle: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=+${query}&key=AIzaSyAzAowXbFJs9-nM5yyQjSpSeng2VIlKtTM`
    );
  },
};
