import CardContainer from "../../components/CardsContainer/CardsContainer";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import Paging from "../../components/Paging/Paging";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  // eslint-disable-next-line
  const [order, setOrder] = useState("");

  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="home_container">
      <div className="header">
        <h1 className="home_title">The Dog Wiki</h1>
        <SearchBar />
        <Link to="/addbreed">
          <button className="button">Add Breed</button>
        </Link>
      </div>
      <Sort setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <Filter />
      <Paging
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paging={paging}
      />
      <CardContainer currentDogs={currentDogs} />
    </div>
  );
};

export default Home;
