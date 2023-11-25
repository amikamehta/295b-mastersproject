import React, { useState } from 'react';
import Chart from "react-apexcharts";
import "./maintainChart.css";

export default function MaintainChart() {
    const [chartData1] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [3, 4, 85, 55, 19, 6, 12, 89]
          }
        ],
      });

    const [chartData2] = useState({
        options: {
          chart: {
            id: "basic-line"
          },
          xaxis: {
            categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [3, 4, 85, 55, 19, 6, 12, 89]
          }
        ]
      });

  return (
    <div className='maintainChart'>
     <div className='row'>
        <div className='chartMaintain'>
            <Chart
              options={chartData1.options}
              series={chartData1.series}
              type="bar"
              width="350"
            />
    </div>        
    </div>
     </div>
  );
}
