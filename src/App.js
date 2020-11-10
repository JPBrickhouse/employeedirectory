import React from "react";
import employees from "./employees"
import EmployeeCard from "./components/FriendCard"


var character0 = employees[0]
var character1 = employees[1]



function App() {
  return (
    <div>
      <p>Hello World</p>

      <EmployeeCard
        employeeInfo={character0}
      />
      <EmployeeCard
        employeeInfo={character1}
      />

    </div>
  );
}

export default App;
