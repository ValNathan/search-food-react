import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./pages/Details";
import Search from "./pages/Search";

function App() {
  //let match = useRouteMatch();

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/">Rechercher un produit</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/product/:id" exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
