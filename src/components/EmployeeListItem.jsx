import React from 'react'

export default function EmployeeListItem(props) {
  return (
    <div className="employee">
        <img src={props.src} alt="" />
        <h5>{props.Name}</h5>
        <p>{props.position}</p>
    </div>
  )}
