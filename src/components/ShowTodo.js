import React from 'react'

function ShowTodo(props) {
    return (
        <div className='container'>
            <div className="row my-2">

                <div className="col-6">
                    <h6>{props.task}</h6>
                    <h6>{props.task2}</h6>
                </div>
                <div className="col-6">
                <button className='btn btn-primary' onClick={()=>{
                    props.onselect(props.id,props.data,props.setData)
                }}>delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ShowTodo