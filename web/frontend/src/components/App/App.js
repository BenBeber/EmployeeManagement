import React, { useState, useEffect ,useMemo} from "react";
import axios from "axios";
import Table from "../Table";
import "./App.css" 



function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = axios.get("http://localhost:8080/employees");
      setData(result.data);
    })();
  }, []);

      const columns = useMemo(
        () => [
          {
            Header:"Id",
            accessor:"id"
          },
          {
            Header: "First name",
            accessor: "firstName"
          },
          {
            Header:"Last Name",
            accessor:"lastName"
          },
          {
            Header: "Email",
            accessor: "email"
          }
        ],
        []
      );

      const testData = [
        {
            "id": 3,
            "firstName": "David",
            "lastName": "ddddt",
            "email": "David@d.com"
        },
        {
            "id": 4,
            "firstName": "C",
            "lastName": "ddddt",
            "email": "Cc@d.com"
        },
        {
            "id": 5,
            "firstName": "Ben",
            "lastName": "ddddt",
            "email": "Ben@d.com"
        },
        {
            "id": 2,
            "firstName": "AfterCHange",
            "lastName": "TEST",
            "email": "2222@test.com"
        }
    ]

    

    return (
      <div className="App">
        <Table columns={columns} data={testData} />
      </div>
    );
}

export default App;