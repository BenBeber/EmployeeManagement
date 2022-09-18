import React, { useEffect, useState, useMemo } from "react";
import Table from "./Table";
import { deleteEmployee, getEmployees } from "./Employee-Components/Actions";
import { useNavigate } from "react-router-dom";


function Home() {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            getEmployeesData();
        })();
    }, []);


    const getEmployeesData = async () => {
        const res = await getEmployees();
        setEmployees(res.data);
    }

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        getEmployeesData();
    }

    const handleUpdate = (id) => {
        console.log(id);
        navigate(`/update/${id}`,{state:{ id:id }});
    }

    const column = useMemo(
        () => [
            { Header: "Id", accessor: "id" },
            { Header: "First name", accessor: "firstName" },
            { Header: "Last Name", accessor: "lastName" },
            { Header: "Email", accessor: "email" },
            { Header: "Actions", 
              Cell: (props) => ( <div>
                                    <button onClick={() => handleDelete(props.row.values.id) } className="btn btn-warning">Delete</button> {"  "}
                                    <button onClick={() => handleUpdate(props.row.values.id)} className="btn btn-info">Edit</button>
                                </div>  
                            ) 
            },
        ],
        []
    );

    return (
        <div className="Home" >
            <h1 style={{ textAlign: "center" }} >Home</h1>
            <Table columns={column} data={employees} />
        </div>
    );
}
export default Home;
