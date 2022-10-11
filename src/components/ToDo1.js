import React, { useState } from 'react';
import ShowTodo from './ShowTodo'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import {  LineChart,  Line} from "recharts";
import {  PieChart,  Pie} from "recharts";
function Todo(props) {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])
    const [Cdata, setCData] = useState(props.category)
    const [vdata, setvData] = useState(props.values)
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])
        setTask('')
    }
    const updated = ()=>{
      setCData(props.category)
      setvData(props.values)
    }
    const data1 = Cdata.map((value1,index1)=>{return {name: Cdata[index1], "uv": vdata[index1]}})
    const data2 = Cdata.map((value1,index1)=>{return {name: Cdata[index1], "uv": vdata[index1]}})
    const data3 = Cdata.map((value1,index1)=>{return {name : Cdata[index1],value : parseInt(vdata[index1])}})
    return (<>
    <div style={{display : "flex",flexDirection:"column" ,width:"35rem"}}>
     
    <section className="part1" style={{display:"flex",flexDirection:"column"}}>
            <div className="row  main-row" style={{width : '25rem',margin:"0px 52px"}}>
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Names</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9 "style={{marginTop:"6px"}}>
                                <input id="todo-input" type="text" className="form-control my-1" value={task} onChange={onChangeHandler} placeholder="Enter Names"/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Make Graph</button>
                        </div>
                    </form>
                    {data.map((value, index) => { return <ShowTodo key={index} data={data} setData={setData} id={index} task={value} onselect={props.ToDelete} /> })}
                </div>
                </div>
<button className='graph-btn' style={{width : '8rem',height : "50px" ,margin:"19px 55px"}} onClick={()=>{updated()}}>Update Graph</button>
</section>

      <div className="lineChart" style={{display : "none"}}>
    <LineChart  width={500}  height={300}  data={data1}  margin={{    top: 5,    right: 30,    left: 20,    bottom: 5  }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {
        data.map((value,index)=>{return <Line type="monotone" dataKey={`${value}`} stroke="#82ca9d" />})
      }
      
    </LineChart>
      </div>

    <div className="barGraph" style={{display : "none"}}>
      <BarChart  width={600}  height={300}  data={data2}  margin={{    top: 5,    right: 30,    left: 20,    bottom: 5  }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {
        data.map((value,index)=>{return <Bar dataKey={`${value}`} fill="#8884d8" />})
      }
    </BarChart>
    </div>
    <div className="pieChart" style={{display : "none",width:"20rem"}}>
    <PieChart width={400} height={300}>
          <Pie   dataKey="value"   isAnimationActive={false}   data={data3}   cx="50%"   cy="50%"   outerRadius={80}   fill="#8884d8"   label />
          {/* <Pie dataKey="value" data={data4} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>
    </div>
</div>
        </>
    )
}
export default Todo