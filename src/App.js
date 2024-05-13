import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BookRoom from './components/BookRoom';
import CarouselSlider from "./CarouselSlider";
import ManageRooms from "./components/ManageRooms";
import ManageBookings from "./components/ManageBooking";
import Login from "./components/Login";
import Register from "./components/Register"; // Make sure to import it at the top

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CarouselSlider />} />
                <Route path="/manage-rooms" element={<ManageRooms />} />
                <Route path="/book" element={<BookRoom />} />
                <Route path="/manage-bookings" element={<ManageBookings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Add other routes for Sign In, Register */}
            </Routes>
        </Router>
    );
}

export default App;
