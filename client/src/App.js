import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Book from "./pages/Book";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search";

//use global context

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <StoreProvider>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/books/:id" component={Book} />
          </StoreProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
