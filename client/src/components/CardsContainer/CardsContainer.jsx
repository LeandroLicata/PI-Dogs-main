import Card from "../Card/Card";
import "./CardsContainer.css";

const CardContainer = ({ currentDogs }) => {
  return (
    <div className="card_container">
      {currentDogs.length
        ? currentDogs.map((dog) => {
            return (
              <Card
                key={dog.id}
                image={dog.image}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};

export default CardContainer;
