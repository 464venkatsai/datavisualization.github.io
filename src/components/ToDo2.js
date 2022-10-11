import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import ToDo1 from './ToDo1'
function Todo(props) {

    const [task, setTask] = useState("")
    const [Cdata, setCdata] = useState([])
    const [vdata, setvdata] = useState(props.values)
    

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newCdata = task;
        setCdata([...Cdata, newCdata])
        setTask('')
        setvdata(props.values)
    }
    // const deleteItem = props.deleteItem
    return (
      <>
      <div className="part" style={{display:"inline-flex"}}>
      <ToDo1 category={Cdata} values={vdata} ToDelete={props.ToDelete}/>
      </div>
            <div className="row main-row" style={{width : '25rem',height:"40px",margin:"5px"}}>
                <div className="col shadow main-col bg-white" style={{margin:"-4px -41px"}}>
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Category Name</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9" style={{marginTop:"6px"}}>
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} placeholder="Enter Catagories"/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add To List</button>
                        </div>
                    </form>

                    {Cdata.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            data={Cdata}
                            setData={setCdata}
                            task={value}
                            onselect={props.ToDelete}
                        />
                    })}
                </div>
            </div>

        </>
    )
                }

export default Todo