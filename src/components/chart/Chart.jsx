import "./chart.css"
import {ResponsiveContainer,Bar,BarChart,Pie,PieChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'Camera-1',
          health: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Camera-2',
          health: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Camera-3',
          health: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'Camera-4',
          health: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'Camera-5',
          health: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Camera-6',
          health: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Camera-7',
          health: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];

      const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];

  return (
    <div className="chart">

        <h3 className="chartTitle">Sales Analytics</h3>
        <div className="bargraph">
        <ResponsiveContainer width="40%" aspect={4/1}>
        <BarChart width={100} height={40} data={data}>
        <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Bar dataKey="health" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="60%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="health" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>

    </div>
  );
}
