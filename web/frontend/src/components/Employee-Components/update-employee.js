import React, { useEffect, useState } from "react";
import "../css/styles.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { getEmployeeById ,updateEmp} from "./Actions";

export default function UpdateEmployee() {
    const location = useLocation();
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id:location.state.id,
        firstName:"",
        lastName:"",
        email:""
    });
    const {id,firstName, lastName, email } = employee;
       
    
    const HandleSubmit = async(event) => {
        console.log(employee);
        event.preventDefault();
        updateEmp(id,employee);
        navigate("/");
    }

    useEffect(()=>{
        getEmployeeValues()
    },[])
    
    
    const getEmployeeValues = async () => {
        const res = await getEmployeeById(id);
        setEmployee(res.data);
    }
    
    const InputChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                <h2 className="text-center mt-3">Update Employee Information</h2>
                <form onSubmit={HandleSubmit}>
                    <label>Employee ID</label>
                    <input
                        type="text"
                        name={"id"}
                        value={id}
                        readOnly={true}
                        onChange={InputChange}
                    />
                    <label>First Name</label>
                    <input
                        type={"text"}
                        name={"firstName"}
                        value= {firstName}
                        onChange={InputChange} />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name={"lastName"}
                        value={lastName}
                        onChange={InputChange} />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name={"email"}
                        value={email}
                        onChange={InputChange} />
                    <button type={"submit"} className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}