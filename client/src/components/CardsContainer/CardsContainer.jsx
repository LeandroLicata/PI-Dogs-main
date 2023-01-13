import Card from "../Card/Card";
import "./CardsContainer.css";
import loadingImage from "../../assets/loading-dog.gif";

const CardContainer = ({ currentDogs }) => {
  return (
    <div className="card_container">
      {currentDogs.length ? (
        currentDogs.map((dog) => {
          return (
            <div className="card" key={dog.id}>
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
      ) : (
        <img
          src={loadingImage}
          alt="loading..."
          width="300px"
          style={{ marginLeft: "550px" }}
        />
      )}
    </div>
  );
};

export default CardContainer;
