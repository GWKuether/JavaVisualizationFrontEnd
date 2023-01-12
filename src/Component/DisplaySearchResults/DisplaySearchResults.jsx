import React, { useEffect, useState } from 'react';
const DisplaySearchResults = (props) => {

    return (
        <div>
            <table>
            <thead>
              <tr>
                <th scope="col">Game_Rank</th>
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
              {props.games.map((game) => {
                return (
                  <tr>
                    <td>
                      {game.game_rank}
                    </td>
                    <td>
                      {game.name}
                    </td>
                    <td>
                      {game.platform}
                    </td>
                    <td>
                      {game.year}
                    </td>
                    <td>
                      {game.genre}
                    </td>
                    <td>
                      {game.publisher}
                    </td>
                    <td>
                      {game.northamericasales}
                    </td>
                    <td>
                      {game.europesales}
                    </td>
                    <td>
                      {game.japansales}
                    </td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
  
       );
}
 
export default DisplaySearchResults;
