import React from "react";
import "./style.css";

// NOTES regarding the IMAGES:
// - Using the public folder to source images:
// - https://create-react-app.dev/docs/using-the-public-folder/
// - However, the typical approach is usually as follows:
// - https://create-react-app.dev/docs/adding-images-fonts-and-files/

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.employeeInfo.firstName} src={process.env.PUBLIC_URL + props.employeeInfo.screenshot} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.employeeInfo.firstName + " " + props.employeeInfo.lastName}
          </li>
          <li>
            <strong>Department:</strong> {props.employeeInfo.department}
          </li>
          <li>
            <strong>Role:</strong> {props.employeeInfo.role}
          </li>
          <li>
            <strong>Hire Year:</strong> {props.employeeInfo.hireYear}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
