import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplaySearchResults from "../DisplaySearchResults/DisplaySearchResults";

const GameSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState([]);
  const [gamesearch, setGamesearch] = useState([]);

  useEffect(() => {
    GetAllGames();
  }, []);

  async function GetAllGames() {
    let response = await axios.get("http://localhost:8080/all");
    setGames(response.data);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput.length > 0) {
      let results = games.filter((game) => {
        if (
          game.name.toLowerCase().match(searchInput.toLowerCase()) ||
          game.platform.toLowerCase().match(searchInput.toLowerCase()) ||
          game.genre.toLowerCase().match(searchInput.toLowerCase()) ||
          game.year == parseInt(searchInput)
        ) {
          return true;
        }
      });
      setGamesearch(results);
      console.log(results);
    }
  }

  return (
    <div>
      <nav style={{ height: "5em", backgroundColor: "#22223B", display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ color: "white" }}>Video Game Data</h1>
        <form onSubmit={handleSubmit} className="margin-bottom">
          <input
            style={{width: "35em"}}
            type="text"
            placeholder="Search here"
            onChange={handleSearch}
            value={searchInput}
          />
          <button className="btn btn-outline-light" style={{color: "white", marginLeft: "1em"}} onClick={handleSubmit}>Search</button>
        </form>
      </nav>

      <div>
        <DisplaySearchResults games={gamesearch} />
      </div>
    </div>
  );
};
export default GameSearch;

