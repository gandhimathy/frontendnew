import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Stock from "./companyStock/stock";
import CompanySearch from "../src/companyStock/company_search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>

          <Route exact path="/stock" component={Stock}></Route>

        </Router>
      </header>
    </div>
  );
}

export default App;
