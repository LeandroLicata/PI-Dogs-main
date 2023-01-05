import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect, useState } from "react";
import "./Detail.css";
import dogImage from "../../assets/no image dog.jpg";
import loadingImage from "../../assets/loading-dog.gif";

export default function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const myDog = useSelector((state) => state.detail);

  return (
    <div className="detail_container">
      {isLoading && (
        <img
          src={loadingImage}
          alt="Loading..."
          width="300px"
          style={{ margin: "auto", verticalAlign: 'middle' }}
        />
      )}
      {!isLoading && (
        <div>
          <h1 className="detail_name">{myDog.name}</h1>
          <img src={myDog.image || dogImage} alt="not found" width="400px" />
          <p className="detail_text">
            Temperaments: {myDog.temperament?.join(", ")}
          </p>
          <p className="detail_text">{`Weight: ${
            myDog.weight && myDog.weight[0]
          } - ${myDog.weight && myDog.weight[1]} Kg`}</p>
          <p className="detail_text">{`Height: ${
            myDog.height && myDog.height[0]
          } - ${myDog.height && myDog.height[1]} cm`}</p>
          <p className="detail_text">{`Life Span: ${myDog.life_span}`}</p>
        </div>
      )}
      <Link to="/home">
        <button className="return_button">Return</button>
      </Link>
    </div>
  );
}
