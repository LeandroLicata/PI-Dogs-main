import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTemperaments,
  filterByOrigin,
  filterByTemperaments,
} from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleFilterByTemperaments(e) {
    dispatch(filterByTemperaments(e.target.value));
  }

  function handleFilterByOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
  }

  return (
    <div>
      <select defaultValue="t" onChange={(e) => handleFilterByTemperaments(e)}>
        <option value="t" disabled>
          Temperaments
        </option>
        <option value="all temperaments">All</option>
        {temperaments?.map((t) => (
          <option value={t.name} key={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <select defaultValue="b" onChange={(e) => handleFilterByOrigin(e)}>
        <option value="b" disabled>
          Breeds
        </option>
        <option value="all breeds">All</option>
        <option value="api">Existing</option>
        <option value="db">Added</option>
      </select>
    </div>
  );
}
