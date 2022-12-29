import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <div className="card_div">
      <h4 className="card_name">{name}</h4>
      <img src={image} alt="not found" height="200px" width="300px" />
      <p className="card_text">{temperament?.join(", ")}</p>
      <p className="card_text">{`Weight: ${weight[0]} - ${weight[1]} Kg`}</p>
      <Link to={`detail/${id}`}>
        <button className="card_button">View details</button>
      </Link>
    </div>
  );
};

export default Card;
