import React, { useEffect, useState } from "react";
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employees";

const Home = () => {
    const [employees,setEmployeesData] = useState({});

    useEffect(() => {
        getEmployees();
    },[]);

    const getEmployees = async () => {
        const result = await axios.get(EMPLOYEE_API_BASE_URL);
        setEmployeesData(result.data);
    };

    const deleteEmployee = async(id) => {
        await axios.delete('http://localhost:8080/employees/{id}');
        getEmployees();
    };

    return (
        <div className={"container"}>
          <div className="py-4">
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  //creates a new array from calling a function for every array element.
                  //so whenever new user is created it will show on the table
                  employees.map((employee, index) => (
                    <tr>
                      <th scope="row" key={employee.id}>
                      </th>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>
                        {/* <Link className={"btn btn-primary mx-2"}
                        to={`/viewuser/${user.id}`}
                        >View</Link>
                        <Link
                          className={"btn btn-outline-primary mx-2"}
                          to={`/edituser/${user.id}`}
                        >
                          Edit
                        </Link> */}
                        <button
                          className={"btn btn-danger mx-2"}
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    };    
    export default Home;
