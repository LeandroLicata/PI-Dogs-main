import "./Paging.css"

export default function Paging({ dogsPerPage, allDogs, paging }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paging_container">
      <div className="paging">
        {pageNumbers?.map((number) => (
          <p className="number" key={number}>
            <button className="paging_button" onClick={() => paging(number)}>{number}</button>
          </p>
        ))}
      </div>
    </nav>
  );
}
