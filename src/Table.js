import React, { useEffect, useState } from "react";
import "./table.css";
export default function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.users);
        setData(json.users);
      });
  }, []);
  return (
    <div>
      <table className="table">
        <tr>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>currency</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Phone</th>
          <th>University</th>
          <th>User Name</th>
          <th>Weight</th>
        </tr>

        {data.map((data, i) => {
          return (
            <tr>
              <td>
                <img src={data.image} alt="" />
              </td>
              <td>{data.firstName}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.address.address}</td>
              <td>{data.age}</td>
              <td>{data.bank.currency}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.university}</td>
              <td>{data.username}</td>
              <td>{data.weight}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
