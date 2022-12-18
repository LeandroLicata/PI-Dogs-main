import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div>
        <h1 className="title">Welcome to Henry Dogs</h1>
        <h2 className="description">
          A page where you can view different dog breeds, their details and
          even add your own!
        </h2>
        <h2 className="description">Have fun touring Henry Dogs!</h2>
        <Link to="/home">
          <button className="button">Log In</button>
        </Link>
      </div>
    </div>
  );
}
