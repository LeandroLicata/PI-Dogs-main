import "./Card.css";

const Card = ({ image, name, temperament, weight}) => {
    weight.length > 1 ? weight = `${weight[0]} - ${weight[1]} Kg` : weight = "Unknown"
    return(
        <div className="card_div">
            <h4 className="card_name">{name}</h4>
            <img src={image} alt="not found" height="200px" width="300px"/>
            <p className="card_text">{temperament?.join(", ")}</p>
            <p className="card_text">{`Weight: ${weight}`}</p>
        </div>
    )
}

export default Card;