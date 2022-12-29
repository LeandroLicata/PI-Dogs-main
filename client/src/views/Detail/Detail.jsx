import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";

export default function Detail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const myDog = useSelector((state) => state.detail);

  return (
    <div>
      <div>
        <h4 className="detail_name">{myDog.name}</h4>
        <img src={myDog.image} alt="not found" height="200px" width="300px" />
        <p className="detail_text">
          Temperaments: {myDog.temperament?.join(", ")}
        </p>
        <p className="detail_text">{`Weight: ${myDog.weight && myDog.weight[0]} - ${myDog.weight && myDog.weight[1]} Kg`}</p>
        <p className="detail_text">{`Height: ${myDog.height && myDog.height[0]} - ${myDog.height &&myDog.height[1]} cm`}</p>
        <p className="detail_text">{`Life Span: ${myDog.life_span}`}</p>
      </div>
      <Link to="/home">
        <button>Return</button>
      </Link>
    </div>
  );
}
