import React, { useEffect, useState } from "react";
import "./DisplaySearch.css";

const DisplaySearchResults = (props) => {
  const [displayCount, setDisplayCount] = useState(5);

  function addDisplay() {
    let count = displayCount + 5;
    setDisplayCount(count);
  }

  function subDisplay() {
    let count = displayCount - 5;
    if (displayCount == 0) {
      return true;
    }
    setDisplayCount(count);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Game Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Platform</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
            <th scope="col">Publisher</th>
            <th scope="col">North America Sales</th>
            <th scope="col">Europe Sales</th>
            <th scope="col">Japan Sales</th>
          </tr>
        </thead>
        <tbody>
          {props.games.map((game, index) => {
            if (index < displayCount) {
              return (
                <tr>
                  <td>{game.game_rank}</td>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.year}</td>
                  <td>{game.genre}</td>
                  <td>{game.publisher}</td>
                  <td>{game.northamericasales}</td>
                  <td>{game.europesales}</td>
                  <td>{game.japansales}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="button-layout">
        <button className="btn btn-outline-dark" style={{marginRight: "1em"}} onClick={addDisplay}>See More</button>
        <button className="btn btn-outline-dark" style={{marginLeft: "1em"}} onClick={subDisplay}>See Less</button>
      </div>
    </div>
  );
};

export default DisplaySearchResults;
