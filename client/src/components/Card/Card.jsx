import "./Card.css";
import { Link } from "react-router-dom";
import dogImage from "../../assets/no image dog.jpg";

const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <Link to={`detail/${id}`}>
      <div className="card_div">
        <h4 className="card_name">{name}</h4>
        <img
          className="card_image"
          src={image || dogImage}
          alt="not found"
          height="150px"
          width="250px"
        />
        <p className="card_text">{temperament?.join(", ")}</p>
        <p className="card_text">{`Weight: ${weight[0]} - ${weight[1]} Kg`}</p>
      </div>
    </Link>
  );
};

export default Card;
