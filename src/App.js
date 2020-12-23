import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <h2>checkout</h2>
          </Route>
          <Route path="/login">
            <h2>login</h2>
          </Route>
          <Route path="/" exact>
            <h2>Home Page</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
