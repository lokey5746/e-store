import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route to="/" exact>
            <h2>Home Page</h2>
          </Route>
          <Route to="/checkout" exact>
            <h2>checkout</h2>
          </Route>
          <Route to="/login" exact>
            <h2>login</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
