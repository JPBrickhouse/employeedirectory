// Importing react and component
import React, { Component } from "react";
// Importing the employees.js file (which contains all the employees in the directory)
import employees from "./employees"
// Importing the various components
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard"
import DropdownOption from "./components/DropdownOption"


// Getting the keys of each object in the employees directory
// - Object.keys returns an array of the keys from the object employees[0]
// - filter creates a new array with all the elements in an array that pass the test implemeneted
// - The test in question returns true if the element is not "screenshot" or "employeeNumber"
var firstFilterContent = (Object.keys(employees[0])).filter(element => {
  return (element !== "screenshot" && element !== "employeeNumber")
})

// The function App has been converted to a class component
class App extends Component {

  // Initial state of everything
  state = {
    listOfEmployees: employees,
    firstFilterDropdown: firstFilterContent,
    firstFilterSelected: '',
    secondFilterDropdown: [],
    secondFilterSelected: '',
    listOfEmployeesDisplayed: employees
  }

  // ===============================================================================================
  // Using arrows function because...
  // When you pass a function to another function (as a callback),
  // "this" will be a reference to the context it is in when it is finally called,
  // as opposed to what it is when you wrote it.
  // If you use an arrow function, it will keep the context it had when you wrote it.
  // https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined
  // (Therefore, the "this" this.setState will refer to the setState method that exists
  // in the overall App component, rather that "this" referring to the individual fucntion)
  // ===============================================================================================

  // An event listener for when the first filter changes
  firstFilterChange = event => {
    // setState is asynchronous
    // As such, this.secondFilterContent is executed as a callback function which will run after the setState is complete
    this.setState({ firstFilterSelected: event.target.value }, this.secondFilterContent)
  }

  // A method function that fills the content of the second filter
  secondFilterContent = () => {
    // If this.state.firstFilterSelected is select
    // - empty the secondFilterDropdown, because there is nothing to filter
    // - display all the employees, because nothing has been filtered
    if (this.state.firstFilterSelected === "Select") {
      this.setState(
        {
          secondFilterDropdown: [],
          listOfEmployeesDisplayed: employees
        }
      )
    }
    // Otherwise, generate the content to place into the secondFilterDropdown
    else {
      // Initializing an empty array to be used below
      var dropdownContent = []

      // Going through the listOfEmployees array, where each element is an object (containing employee data)
      // this.state.firstFilterSelected corresponds to a selected value from the first filter's dropdown menu
      // element[this.state.firstFilterSelected] gets the value associated with the key of this.state.firstFilterSelected in the element (an object)
      this.state.listOfEmployees.forEach(element => {
        dropdownContent.push(element[this.state.firstFilterSelected])
      })

      // Removing duplicates from the array: https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
      var dropdownNoDuplicates = [...new Set(dropdownContent)]

      // Setting the state of secondFilterDropdown (by passing it the array of dropdownNoDuplicates)
      this.setState({ secondFilterDropdown: dropdownNoDuplicates })
    }
  }

  // An event listener for when the second filter changes
  secondFilterChange = event => {
    // setState is asynchronous
    // As such, this.employeesToDisplay is executed as a callback function which will run after the setState is complete
    this.setState({ secondFilterSelected: event.target.value }, this.employeesToDisplay)
  }

  // A method function that determines which employees to display by filtering them by
  // the criteria established in the first and second filters
  employeesToDisplay = () => {
    // Get the state values of the first and second filters
    var firstFilter = this.state.firstFilterSelected
    var secondFilter = this.state.secondFilterSelected

    // filtering the employees by the values of the first and second filters
    var filteredEmployees = this.state.listOfEmployees.filter(element => {
      return element[firstFilter] === secondFilter
    })

    // Setting the state of the listOfEmployeesDisplayed
    this.setState({ listOfEmployeesDisplayed: filteredEmployees })
  }

  // The render method will be called each time an update happens
  render() {
    return (
      <div>
        <h1>Employee Directory!</h1>

        {/* First Filter */}
        <p>Filter by</p>
        <select value={this.state.firstFilterSelected} onChange={this.firstFilterChange}>
          {/* Select appears initially when the page loads */}
          <option defaultValue value="Select">Select</option>
          {/* The remaining dropdown values are generated by the elements in the array contained in this.state.firstFilterDropdown */}
          {this.state.firstFilterDropdown.map(element => {
            return <DropdownOption option={element} key={element} />;
          })}
        </select>

        {/* Second Filter */}
        <p>Select from that filter</p>
        <select value={this.state.secondFilterSelected} onChange={this.secondFilterChange}>
          {/* Select appears initially when the page loads */}
          <option defaultValue value="Select">Select</option>
          {/* The dropdown values are generated by the elements in the array contained in this.state.secondFilterDropdown */}
          {this.state.secondFilterDropdown.map(element => {
            return <DropdownOption option={element} key={element} />;
          })}
        </select>

        {/* Displaying all the employee cards */}
        <Wrapper>
          {this.state.listOfEmployeesDisplayed.map(employee => {
            return <EmployeeCard employeeInfo={employee} key={employee.employeeNumber} />
          })}
        </Wrapper>

      </div>
    );
  }
}

export default App;
