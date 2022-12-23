import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import AddBreed from "./views/AddBreed/AddBreed";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact patch="/addbreed" component={AddBreed} />
      </Switch>
    </div>
  );
}

export default App;
