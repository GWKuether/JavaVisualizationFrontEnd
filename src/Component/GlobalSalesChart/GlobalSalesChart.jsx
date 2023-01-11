import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from "axios";

const GlobalSalesChart = (props) => {

    const [platformSales, setPlatformSales] = useState([])

    useEffect(() => {
        GetAllGames();
      });


    async function GetAllGames(){
        let response = await axios.get('http://localhost:8080/platformsales')
        debugger
        setPlatformSales(response.data)
        console.log(platformSales)
        

    }

    const data = [
        ["Platform", "Sales", { role: "style" }],
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ];
    


    return ( 
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
     );
}
 
export default GlobalSalesChart;