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
    dispatch(filterByTemperaments(e.target.value))
  }

  function handleFilterByOrigin(e) {
    dispatch(filterByOrigin(e.target.value))
  }

  return (
    <div>
        <select onChange={(e) => handleFilterByTemperaments(e)}>
            <option value="all temperaments">All</option>
            {temperaments?.map((t) => (
                <option value={t.name} key={t.name}>{t.name}</option>
            ))}
        </select>
    </div>
  )
}
