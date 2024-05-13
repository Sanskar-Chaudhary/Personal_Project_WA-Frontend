// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported if not already in index.js

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="logo.png" width="40" height="40" alt="Hostel Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">  {/* Added justify-content-end here */}
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/manage-rooms">Manage Rooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/book">Book Here</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/manage-bookings">Manage Bookings</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
