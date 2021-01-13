import React from "react";

function EmployeeRow(props) {
  return (
    <tr data={props.id}>
      <td>
        <img
          alt={props.lastName}
          className="img-fluid rounded-circle"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
      <td>
        <a className="nav-link" href={props.email}>
          {props.email}
        </a>
      </td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default EmployeeRow;
