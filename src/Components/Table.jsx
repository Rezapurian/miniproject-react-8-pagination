import React from "react";
import "./Table.css";

export default function Table(props) {
  return (
    <div className="container-table">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, index) => (
            <tr key={index}> 
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.fullMobileNu}</td>
              <td>{user.email}</td>
              <td>{user.signupData}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
