import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div>
                <h2>Student Tracker</h2>
                <ul>
                    <li><NavLink className="navlink" exact to="/AllStudents">All Students</NavLink></li>
                    <li><NavLink className="navlink" to="/1FE1">1FE1</NavLink></li>
                    <li><NavLink className="navlink" to="/1FE2">1FE2</NavLink></li>
                    <li><NavLink className="navlink" to="/2FE">2FE</NavLink></li>
                    <li><NavLink className="navlink" to="/3FE">3FE</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;