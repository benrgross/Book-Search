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
    <StoreProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/books/:id" component={Book} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
