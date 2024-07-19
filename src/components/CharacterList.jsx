/* eslint-disable react/prop-types */
import { useApp } from "../context/AppContext";
import Character from "./Character";
import Loader from "./Loader";
import NavPage from "./NavPage";

/* eslint-disable react/prop-types */
function CharacterList() {
  const { isLoading, characters } = useApp();

  if (isLoading) return <Loader />;

  return (
    <div className="container pb-4">
      <NavPage />
      <div className="row">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <NavPage />
    </div>
  );
}

export default CharacterList;
