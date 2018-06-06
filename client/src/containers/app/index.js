import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";

const App = () => (
  <div id="routemenu">
    <header>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
