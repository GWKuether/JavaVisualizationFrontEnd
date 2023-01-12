import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from "axios";

const GlobalSalesChart = (props) => {
  const[chartData,setChartData] = useState([])
  const [platformSales, setPlatformSales] = useState([])

    useEffect(() => {
        getPlatformSales();
      },[]);


    async function getPlatformSales(){
        let response = await axios.get('http://localhost:8080/platformsales')
        
        formatData(response.data)
    }

    const formatData = (data)=>{
        let formattedData = Object.entries(data).map(([key,value])=>{
          console.log("Key: ", key, " Value: ", value)
          
          return([key, value, "#b87333"])
          
        })
        console.log(formattedData)
        setChartData([["Platform", "Sales", { role: "style" }], ...formattedData])
    }



    return ( 
      <div>
        {/* {console.log("Chart Data", chartData)} */}
        <Chart chartType="ColumnChart" width="100%" height="400px" data={chartData} />
      </div>
     );
}
 
export default GlobalSalesChart;