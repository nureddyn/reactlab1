import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default function HomePage() {
  return (
		<>
			<div className="left-side">
        <Header className="left-header" title="Employee Directory"/>
        <SearchBar />
        <EmployeeList />
      </div>
		</>
  )
}
