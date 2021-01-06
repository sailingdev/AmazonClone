import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
