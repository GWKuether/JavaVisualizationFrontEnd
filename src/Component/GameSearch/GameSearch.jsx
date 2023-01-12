import axios from "axios"
import React, { useState, useEffect } from 'react';
import DisplaySearchResults from "../DisplaySearchResults/DisplaySearchResults";


const GameSearch = (props) => {
    
    const[searchInput, setSearchInput] = useState('')
    const[games, setGames] = useState([])
    const[gamesearch, setGamesearch] = useState([])

    useEffect(() => {
        GetAllGames();
      },[]);

    async function GetAllGames(){
        let response = await axios.get('http://localhost:8080/all')
        setGames(response.data)
    }          

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (searchInput.length > 0) {
            let results = games.filter((game) => {
                if (game.name.toLowerCase().match(searchInput.toLowerCase()) ||  game.platform.toLowerCase().match(searchInput.toLowerCase()) || game.genre.toLowerCase().match(searchInput.toLowerCase())){
                    return true
                }
                
            })
            setGamesearch(results)
            console.log(results)
        }
    }


    
    return (
        <div>
            <form onSubmit={handleSubmit} className='margin-bottom'>
                <input type='text' placeholder='Search here' onChange={handleSearch} value={searchInput} />
            </form>

            <div>
                <DisplaySearchResults games = {gamesearch}/>
            </div>

        </div>

     );
}
export default GameSearch;


























// import React, { useState,useEffect } from 'react';
// import axios from 'axios';




// const GameSearch = (props) => {

//     const [searchInput, setSearchInput]=useState('')
//     const [games, setGames]=useState([])



    
//     const handleSearch = (event) => {
//         event.preventDefault()
//         setSearchInput(event.target.value)

//     function handleSubmit(event){
//         event.preventDefault()
//         if (searchInput.length > 0){
//             let results = games.filter((game)=>{
//                 if(game.name.toLowerCase().match(searchInput.toLowerCase) || (game.platform.toLowerCase().match(searchInput.toLowerCase)) || (game.year.match(searchInput)) || (game.genre.toLowerCase().match(searchInput.toLowerCase))){
//                   return true;  
//                 }
                
//             })
//             console.log(results)
//         }
//     }

//     useEffect(() => {
//         GetAllGames() ;
//       },[]);

//     async function GetAllGames(){
//         let response = await axios.get('http://localhost:8080/all')
//         console.log(response.data)
//         setGames(response.data)   
//     }

//     return ( 
//         <form onSubmit={handleSubmit} className='margin-bottom'>
//             <input type='text' placeholder='Search here' onChange={handleSearch} value={searchInput} />
//         </form>
//      );
// }}
 
// export default GameSearch;