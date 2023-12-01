import React,{useState} from 'react';
import Chart from "react-apexcharts";

export default function MaintainChartRow2() {

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
            name: "camera-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "camera-2",
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
            name: "camera-3",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "camera-4",
            data: [3, 4, 85, 55, 19, 6, 12, 89]
          }
        ]
      });


      return (
        <div className='maintainChart'>
            <h1>Camera Status</h1>
         <div className='row'>
                <div className='chartMaintain'>
                <Chart
                  options={chartData1.options}
                  series={chartData1.series}
                  type="scatter"
                  width="350"
                />
               <Chart className='chartMaintainend'
                  options={chartData2.options}
                  series={chartData2.series}
                  type="radar"
                  width="350"
                />
                <Chart className='chartMaintainend2'
                  options={chartData2.options}
                  series={chartData2.series}
                  type="line"
                  width="350"
                />
                </div>
        </div>
         </div>
      );
}
