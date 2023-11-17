import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import data from '../models/data';

export default function EmployeeList() {
  return (
    <>
      <div className="worker-list">
        <EmployeeListItem
        src={data['employee 1']['photo']}
        Name={data['employee 1']['name']}
        position={data['employee 1']['position']}/>

        <EmployeeListItem
        src={data['employee 2']['photo']}
        Name={data['employee 2']['name']}
        position={data['employee 2']['position']}/>

        <EmployeeListItem
        src={data['employee 3']['photo']}
        Name={data['employee 3']['name']}
        position={data['employee 3']['position']}/>

        <EmployeeListItem
        src={data['employee 4']['photo']}
        Name={data['employee 4']['name']}
        position={data['employee 4']['position']}/>
      </div>
    </>
  )
}
