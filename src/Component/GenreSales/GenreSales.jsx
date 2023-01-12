
import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from "axios";

const GenreSales = (props) => {
  const[chartData,setChartData] = useState([])
  

    useEffect(() => {
        getGenreSales();
      },[]);


    async function getGenreSales(){
        let response = await axios.get('http://localhost:8080/genresales')
        
        formatData(response.data)
    }

    const formatData = (data)=>{
        let formattedData = Object.entries(data).map(([key,value])=>{
          console.log("Key: ", key, " Value: ", value)
          
          return([key, value, "#14213d"])
          
        })
        console.log(formattedData)
        setChartData([["Genre", "Sales", { role: "style" }], ...formattedData])
    }



    return ( 
      <div>
        <h3>The chart below displays which Genre sold most since 2003</h3>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={chartData} />
      </div>
     );
}
 
export default GenreSales;