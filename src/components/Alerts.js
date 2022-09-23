import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height : "40px"}}>
      { props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            {props.alert.type} {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}
