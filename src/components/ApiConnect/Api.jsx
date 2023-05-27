import { useEffect, useState } from "react";
import Card from "../Card/Card";

function ListApi() {
  const [page, setPage] = useState(1);
  const [listCharacter, setListCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setListCharacter(data.results);
      });
  }, [page]);

  const mapApi = (listCharacter) => {
    return listCharacter.map((result) => {
      return (
        <div className="container">
          <Card listCharacter={result} />
        </div>
      );
    });
  };
  return (
    <>
      <h3 className="subtitle">Cards personajes Rick & Morty</h3>
      <ul>{mapApi(listCharacter)}</ul>
      <div className="paginacion">
        {page > 1 && (
          <button
            style={{ backgroundColor: "rgb(85, 85, 200)" }}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </button>
        )}
        {page < 40 && (
          <button
            style={{ backgroundColor: "rgb(85, 85, 200)" }}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        )}
      </div>
    </>
  );
}

export default ListApi;
