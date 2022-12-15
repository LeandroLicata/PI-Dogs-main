import { useDispatch } from "react-redux";
import { sortByName, sortByWeight } from "../../redux/actions";

export default function Sort({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  function handleSortByName(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(sortByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  return (
    <div>
      <select onChange={(e) => handleSortByName(e)}>
        <option disabled selected defaultValue>
          Alphabetical order
        </option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
      <select onChange={(e) => handleSortByWeight(e)}>
        <option disabled selected defaultValue>
          Sort by weight
        </option>
        <option value="heavier">Heavier</option>
        <option value="lighter">Lighter</option>
      </select>
    </div>
  );
}
