import Card from "../Card/Card";
import "./CardsContainer.css";
import { NavLink } from "react-router-dom";

const CardContainer = ({ currentDogs }) => {
  return (
    <div className="card_container">
      {currentDogs.length
        ? currentDogs.map((dog) => {
            return (
              <div key={dog.id}>
                <Card
                  key={dog.id}
                  id={dog.id}
                  image={dog.image}
                  name={dog.name}
                  temperament={dog.temperament}
                  weight={dog.weight}
                />
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};

export default CardContainer;
