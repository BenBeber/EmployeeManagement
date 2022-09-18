import React, { useState } from "react"
import "../css/styles.css"
import { useNavigate } from 'react-router-dom';
import { addNewEmployee } from "./Actions"



export default function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const { firstName, lastName, email } = employee;


    const handleSubmit = event => {
        event.preventDefault();
        addNewEmployee(employee);
        navigate('/');
    }

    const onInputChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value });
    }


    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                <h2 className="text-center mt-3">Add New Employee</h2>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text"
                        name={"firstName"}
                        value={firstName}
                        placeholder={"Enter first name"}
                        onChange={onInputChange} />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name={"lastName"}
                        value={lastName}
                        placeholder={"Enter last Name"}
                        onChange={onInputChange} />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name={"email"}
                        value={email}
                        placeholder={"Enter Email"}
                        onChange={onInputChange} />
                    <button type={"submit"} className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}
