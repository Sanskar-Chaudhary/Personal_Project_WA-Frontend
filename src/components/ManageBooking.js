import React, { useState } from 'react';

const ManageBookings = () => {
    const [bookingId, setBookingId] = useState('');
    const [booking, setBooking] = useState(null);
    const [editForm, setEditForm] = useState({ startDate: '', endDate: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingId(value);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
    };

    const fetchBooking = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}`);
            const data = await response.json();
            setBooking(data);
            setEditForm({ startDate: data.startDate, endDate: data.endDate });
        } catch (error) {
            setError('Failed to fetch booking');
        }
    };

    const updateBooking = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm)
            });
            if (response.ok) {
                alert('Booking updated successfully!');
                fetchBooking(); // Refresh the data
            } else {
                throw new Error('Failed to update booking');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteBooking = async () => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/bookings/${bookingId}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    alert('Booking deleted successfully!');
                    setBooking(null);
                    setBookingId('');
                } else {
                    throw new Error('Failed to delete booking');
                }
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div>
            <h1>Manage Bookings</h1>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Enter Booking ID"
                value={bookingId}
                onChange={handleInputChange}
            />
            <button onClick={fetchBooking}>Fetch Booking</button>
            {booking && (
                <div>
                    <h2>Booking Details</h2>
                    <p>ID: {booking.id}</p>
                    <p>Room ID: {booking.roomId}</p>
                    <p>User ID: {booking.userId}</p>
                    <p>Check-In Date: {booking.checkInDate}</p>
                    <p>Check-Out Date: {booking.checkOutDate}</p>
                    <div>
                        <input
                            type="date"
                            name="startDate"
                            value={editForm.startDate}
                            onChange={handleEditChange}
                        />
                        <input
                            type="date"
                            name="endDate"
                            value={editForm.endDate}
                            onChange={handleEditChange}
                        />
                        <button onClick={updateBooking}>Update Booking</button>
                        <button onClick={deleteBooking}>Delete Booking</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageBookings;
