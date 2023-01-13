import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="landing_text_container">
        <h1 className="title">Welcome to The Dog Wiki</h1>
        <h2 className="description">
          A place where you can view different dog breeds,
        </h2>
        <h2 className="description"> their details and even add your own!</h2>
        <h2 className="description">Have fun touring The Dog Wiki!</h2>
        <Link to="/home">
          <button className="button">Log In</button>
        </Link>
      </div>
    </div>
  );
}
