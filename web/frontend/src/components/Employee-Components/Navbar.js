import React from "react";
import "../css/styles.css"
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="logo">Ben</div>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/add-new">Add new Employee</Link>
            </ul>
        </div>
    );

}