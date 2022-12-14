import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
