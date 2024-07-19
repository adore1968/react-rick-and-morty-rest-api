/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setInfo(data.info);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (info.next === null) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <AppContext.Provider
      value={{ page, handleNextPage, isLoading, characters, info }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
