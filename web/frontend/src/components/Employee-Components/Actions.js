import { render } from "@testing-library/react";
import axios from "axios";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const deleteEmployee = async(id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:8080/${id}`);
    return res;
  };

export const getEmployees = async()=> {
    const res = await axios.get("http://localhost:8080");
    return res.data;
};