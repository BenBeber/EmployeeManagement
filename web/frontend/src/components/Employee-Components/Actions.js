
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const deleteEmployee = async (id) => {
    const res = await axios.delete(`http://localhost:8080/${id}`);
    return res;
};

export const getEmployees = async () => {
    const res = await axios("http://localhost:8080");
    return res;
};

export const addNewEmployee = async (employee) => {
    const res = await axios.post("http://localhost:8080", employee);
    return res;
}

export const updateEmp = async(id,employee) => {
    const res = await axios.put(`http://localhost:8080/${id}`,employee);
    return res;
}

export const getEmployeeById = async(id) => {
    const res = await axios.get(`http://localhost:8080/${id}`);
    return res;
}

export const getEmployeeByEmail = async(email) => {
    const res = await axios.get(`http://localhost:8080/by-email`,email);
    return res;
}

