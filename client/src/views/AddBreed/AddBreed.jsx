import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions";
import "./AddBreed.css";

function validate(input) {
  let errors = {};
  // eslint-disable-next-line
  if (!/^[A-Za-z \-]*$/.test(input.name)) { 
    errors.name = "invalid name";
  }
  if (input.min_height >= input.max_height) {
    errors.height = "max height must be higher than min height";
  }
  if (input.min_weight >= input.max_weight) {
    errors.weight = "max weight must be higher than min height";
  }
  if (input.min_weight >= input.max_weight) {
    errors.life_span = "max life span must be higher than min life span";
  }
  if (input.image) {
    if (
      // eslint-disable-next-line
      !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
        input.image
      )
    ) {
      errors.image = "invalid image url";
    }
  }
  if (input.temperament.length > 6) {
    errors.temperament = "there can only be up to 6 temperaments";
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
    min_life_span: "",
    max_life_span: "",
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
      min_life_span: "",
      max_life_span: "",
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
            className="form_input" 
            type="text"
            value={input.name}
            name="name"
            required
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label className="form_label">Min Height(cm):</label>
          <input
            className="form_input"
            type="number"
            min="15"
            max="100"
            value={input.min_height}
            name="min_height"
            required
            onChange={handleChange}
          />
          <label className="form_label">Max Height(cm):</label>
          <input
            className="form_input"
            type="number"
            min="15"
            max="100"
            value={input.max_height}
            name="max_height"
            required
            onChange={handleChange}
          />
          {errors.height && <p className="error">{errors.height}</p>}
        </div>

        <div>
          <label className="form_label">Min Weight(Kg):</label>
          <input
            className="form_input"
            type="number"
            min="1"
            max="90"
            value={input.min_weight}
            name="min_weight"
            required
            onChange={handleChange}
          />
          <label className="form_label">Max Weight(Kg):</label>
          <input
            className="form_input"
            type="number"
            min="1"
            max="90"
            value={input.max_weight}
            name="max_weight"
            required
            onChange={handleChange}
          />
          {errors.weight && <p className="error">{errors.weight}</p>}
        </div>
        <div>
          <label className="form_label">Life Span(min):</label>
          <input
            className="form_input"
            type="number"
            min="5"
            max="20"
            value={input.min_life_span}
            name="min_life_span"
            required
            onChange={handleChange}
          />

          <label className="form_label">Life Span(max):</label>
          <input
            className="form_input"
            type="number"
            min="5"
            max="20"
            value={input.max_life_span}
            name="max_life_span"
            required
            onChange={handleChange}
          />
          {errors.life_span && <p className="error">{errors.life_span}</p>}
        </div>
        <div>
          <label className="form_label">Image:</label>
          <input
            className="form_input"
            type="url"
            value={input.image}
            name="image"
            required
            onChange={handleChange}
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <h3 className="form_label">Select Temperaments</h3>

        <select
          className="select"
          defaultValue=""
          required
          onChange={(e) => handleSelect(e)}
        >
          <option value="" disabled>
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
            <p className="form_label">{el}</p>
            <button
              type="button"
              className="delete_button"
              onClick={() => handleDelete(el)}
            >
              x
            </button>
          </div>
        ))}
        {errors.temperament && <p className="error">{errors.temperament}</p>}
        <br />
        <br />
        <button type="submit" className="button" disabled={Object.keys(errors).length > 0}>
          Create Dog
        </button>
      </form>
    </div>
  );
}
