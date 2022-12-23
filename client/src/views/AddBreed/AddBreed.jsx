import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions";

export default function AddBreed() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postDog(input));
    alert("Dog breed added successfully");
    setInput({
      name: "",
      min_height: "",
      max_height: "",
      min_weight: "",
      max_weight: "",
      life_span: "",
      image: "",
      temperament: [],
    });
    history.push("/home");
  }

  const handleSelect = (e) => {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>Return</button>
      </Link>
      <h1>Add your dog breed!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <h4>Height(cm)</h4>
          <label>Min Height:</label>
          <input
            type="text"
            value={input.min_height}
            name="min_height"
            onChange={handleChange}
          />
          <label>Max Height:</label>
          <input
            type="text"
            value={input.max_height}
            name="max_height"
            onChange={handleChange}
          />
        </div>

        <div>
          <h4>Weight(Kg)</h4>
          <label>Min Weight:</label>
          <input
            type="text"
            value={input.min_weight}
            name="min_weight"
            onChange={handleChange}
          />
          <label>Max Height:</label>
          <input
            type="text"
            value={input.max_weight}
            name="max_weight"
            onChange={handleChange}
          />
        </div>
        <div>
          <h4></h4>
          <label>Life Span:</label>
          <input
            type="text"
            value={input.life_span}
            name="life_span"
            onChange={handleChange}
          />
        </div>
        <div>
          <h4></h4>
          <label>Image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>

        <h3>Select Temperaments</h3>
        <select defaultValue="t" onChange={(e) => handleSelect(e)}>
          <option value="t" disabled>
            Temperaments
          </option>
          {temperaments?.map((t) => (
            <option value={t.name} key={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <ul>
          <li>{input.temperament.map((el) => el + " ")}</li>
        </ul>
        <button type="submit">Create Dog</button>
      </form>
    </div>
  );
}
