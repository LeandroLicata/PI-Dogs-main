import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";
import AddBreed from "./views/AddBreed/AddBreed";
import { Switch } from "react-router-dom";
import Detail from "./views/Detail/Detail"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/addbreed" component={AddBreed} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
