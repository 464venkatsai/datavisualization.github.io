import React from "react";
import {  LineChart,  Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend} from "recharts";
import Todo1 from "./ToDo1";
import Todo2 from "./ToDo2";
export default function Assiatant(prop) {
// sty = 123
const data = [
  {
    name: "Page A",
    vs: 4000,
    // pv: 2400,
    // s : `${sty}`,
    amt: 2400
  },
  {
    name: "Page B",
    vs: 3000,
    v:4000,
    // pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    vs: 2000,
    // pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    vs: 2780,
    // pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    vs: 1890,
    // pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    vs: 2390,
    // pv: 3800,
    amt: 2500
  },
  {
    name: "Page F",
    vs: 2390,
    // pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    vs: 3490,
    amt: 2100
  }
];
  return (
    <>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="vs" stroke="#82ca9d" />
    </LineChart>
    
    
    <div className=" todos"><div className="boxs"><Todo1/></div><div className="boxs"><Todo2/></div></div>
    </>
  );
}
