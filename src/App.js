import React from "react";
import employees from "./employees"
import EmployeeCard from "./components/FriendCard"
import DropdownOption from "./components/DropdownOption"

var character0 = employees[0]
var character1 = employees[1]

// Getting the keys of each object in the employees directory
var keys = (Object.keys(employees[0]).filter(element => {
  return element !== "screenshot" || element !== "employeeNumber"
}))

keys.forEach(element => {
  console.log(element)
})


function App() {
  return (
    <div>
      <h1>Employee Directory!</h1>

      <p>Select Filter</p>
      <select>
        <option defaultValue disabled="disabled">Select Filter</option>
        <DropdownOption option="Hello" />

        {/* {keys.forEach(arrayElement => {
          <DropdownOption option={arrayElement} />
        })}; */}

      </select>

      <p>Selection</p>
      <select>
        <option defaultValue disabled="disabled">Selection</option>
        <DropdownOption option="Goodbye" />
      </select>



      <EmployeeCard employeeInfo={character0} />
      <EmployeeCard employeeInfo={character1} />

    </div>
  );
}

export default App;
