import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import ToDo2 from './ToDo2'
function Todo(props) {

    const [task, setTask] = useState("")
    const [Vdata, setVdata] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newVdata = task;
        setVdata([...Vdata, newVdata])
        setTask('')
    }

    // const deleteItem =(a)=>{
    //     const finalVdata = Vdata.filter((curEle,index)=>{
    //         return index !== a;
    //     })
    //     setVdata(finalVdata)
    // }
    const deleteItem =(a,data,setData)=>{
        const finalVdata = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalVdata)
    }
    const displayGraph = (className1,className2,className3)=>{
        let line1 = document.getElementsByClassName(`${className1}`)
        let line2 = document.getElementsByClassName(`${className2}`)
        let line3 = document.getElementsByClassName(`${className3}`)
        let lineChart = line1.item(0)
        let PieChart = line2.item(0)
        let BarGraph = line3.item(0)
        if (lineChart.style.display==="none") {
          lineChart.style.display = "inline-flex"
          PieChart.style.display = "none"
          BarGraph.style.display = "none"
        }
        else{
          lineChart.style.display = "none"
        }
      }
    
      
    return (
      <>
      <div >
      <div className="container my-3" style={{display : "flex",flexDirection:"row",padding:"0px"}}>
          <h2 className='my-4'>Analyze Data</h2>
          <button className='graph-btn' style={{width : '8rem',height : "50px" ,margin:"19px 55px"}} onClick={()=>{displayGraph('lineChart','barGraph','pieChart')}}>Graph</button>
          <button className='graph-btn' style={{width : '8rem',height : "50px" ,margin:"19px 55px"}} onClick={()=>{displayGraph('barGraph','lineChart','pieChart')}}>BarGraph</button>
          <button className='graph-btn' style={{width : '8rem',height : "50px" ,margin:"19px 55px"}} onClick={()=>{displayGraph('pieChart','barGraph','lineChart')}}>PieChart</button>
        </div>
      <div className="boxes" style={{display:"flex",width:"90rem",height:"35rem"}}>
      <section className="part"style={{padding:"20px",display:'inline-flex'}} >
      <ToDo2 values={Vdata} ToDelete={deleteItem} />
        </section>
      <div className="row main-row" style={{width : '25rem',height:"40px",marginTop:"23px"}}>
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Values</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9" style={{marginTop:"9px"}}>
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} placeholder="Enter values"/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add To List</button>
                        </div>
                    </form>

                    {Vdata.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            data={Vdata}
                            setData={setVdata}
                            task={value}
                            onselect={deleteItem}
                        />
                    })}
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default Todo