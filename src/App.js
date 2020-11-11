// Importing react and component
import React, { Component } from "react";
// Importing the employees.js file (which contains all the employees in the directory)
import employees from "./employees"
// Importing the various components
import EmployeeCard from "./components/EmployeeCard"
import DropdownOption from "./components/DropdownOption"


// Getting the keys of each object in the employees directory
// - Object.keys returns an array of the keys from the object employees[0]
// - filter creates a new array with all the elements in an array that pass the test implemeneted
// - The test in question returns true if the element is not "screenshot" or "employeeNumber"
var firstFilterContent = (Object.keys(employees[0])).filter(element => {
  return (element !== "screenshot" && element !== "employeeNumber")
})

// The function App has been converted to a class
class App extends Component {

  state = {
    listOfEmployees: employees,
    firstFilterDropdown: firstFilterContent,
    firstFilterSelected: '',
    secondFilterDropdown: [],
    secondFilterSelect: ''
  }

  // Using an arrow function because...
  // When you pass a function to another function (as a callback),
  // "this" will be a reference to the context it is in when it is finally called,
  // as opposed to what it is when you wrote it.
  // If you use an arrow function, it will keep the context it had when you wrote it.
  // https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined
  // (Therefore, the "this" this.setState will refer to the setState method that exists
  // in the overall App component, rather that "this" referring to the individual fucntion)
  firstFilterChange = event => {
    
    // setState is asynchronous, so put the console.log in the callback; that way the console.log is executed after the setState is complete
    // this.setState({ firstFilterSelected: event.target.value }, () => console.log(this.state.firstFilterSelected))

    this.setState({ firstFilterSelected: event.target.value }, this.secondFilterContent)
  }

  secondFilterContent = () => {
    var dropdownContent = []

    this.state.listOfEmployees.forEach(element => {
      dropdownContent.push(element[this.state.firstFilterSelected])
    })
    
    console.log(dropdownContent)
  }


  secondFilterChange = event => {

  }

  // The render method will be called each time an update happens
  render() {
    return (
      <div>
        <h1>Employee Directory!</h1>

        {/* First Filter */}
        <p>Filter by</p>
        <select value={this.state.firstFilterSelected} onChange={this.firstFilterChange}>

          {/* Start off with a non selectable dropdown? */}

          {this.state.firstFilterDropdown.map(element => {
            return <DropdownOption option={element} key={element} />;
          })}
        </select>

        {/* Second Filter */}
        <p>Select from that filter</p>
        <select>
          {/* Start off with a non selectable dropdown? */}

          <DropdownOption option="Goodbye" />
        </select>

        {/* Displaying all the employee cards */}
        {this.state.listOfEmployees.map(employee => {
          return <EmployeeCard employeeInfo={employee} key={employee.employeeNumber} />
        })}

      </div>
    );
  }
}

export default App;
