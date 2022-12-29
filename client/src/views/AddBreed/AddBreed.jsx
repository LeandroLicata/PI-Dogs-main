import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions";
import "./AddBreed.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "name required";
  } else if (!input.life_span) {
    errors.life_span = "life span required";
  }
  return errors;
}

export default function AddBreed() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});

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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((tem) => tem !== e),
    });
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className="form_container">
      <Link to="/home">
        <button className="return_button">Return</button>
      </Link>
      <h1 className="form_title">Add your dog breed!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="form_label">Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label className="form_label">Min Height(cm):</label>
          <input
            type="text"
            value={input.min_height}
            name="min_height"
            onChange={handleChange}
          />
          <label className="form_label">Max Height(cm):</label>
          <input
            type="text"
            value={input.max_height}
            name="max_height"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="form_label">Min Weight(Kg):</label>
          <input
            type="text"
            value={input.min_weight}
            name="min_weight"
            onChange={handleChange}
          />
          <label className="form_label">Max Weight(Kg):</label>
          <input
            type="text"
            value={input.max_weight}
            name="max_weight"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form_label">Life Span:</label>
          <input
            type="text"
            value={input.life_span}
            name="life_span"
            onChange={handleChange}
          />
          {errors.life_span && <p className="error">{errors.life_span}</p>}
        </div>
        <div>
          <label className="form_label">Image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>

        <h3 className="form_label">Select Temperaments</h3>

        <select className="select" defaultValue="t" onChange={(e) => handleSelect(e)}>
          <option value="t" disabled>
            Temperaments
          </option>
          {temperaments?.map((t) => (
            <option value={t.name} key={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        {input.temperament.map((el) => (
          <div className="shown_temperaments">
            <p className="form_label">{el}_</p>
            <button
              type="button"
              className="delete_button"
              onClick={() => handleDelete(el)}
            >
              x
            </button>
          </div>
        ))}
        <button type="submit" className="button">
          Create Dog
        </button>
      </form>
    </div>
  );
}
