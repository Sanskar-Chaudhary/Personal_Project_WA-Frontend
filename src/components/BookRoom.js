import React, { useState, useEffect } from 'react';

const BookRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [booking, setBooking] = useState({
        roomId: '',
        userId: '',
        startDate: '',
        endDate: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/rooms')
            .then(response => response.json())
            .then(data => setRooms(data))
            .catch(err => setError('Failed to fetch rooms'));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBooking(prevBooking => ({
            ...prevBooking,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedRoom = rooms.find(room => room.id === booking.roomId);
        if (!selectedRoom) {
            setError('Invalid room selection');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomId: selectedRoom.id,
                    userId: booking.userId,
                    checkInDate: booking.startDate,
                    checkOutDate: booking.endDate
                })
            });
            if (!response.ok) throw new Error('Failed to create booking');
            alert('Booking successful!');
            setBooking({ roomId: '', userId: '', startDate: '', endDate: '' });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Book a Room</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User ID"
                    name="userId"
                    value={booking.userId}
                    onChange={handleInputChange}
                    required
                />
                <select name="roomId" value={booking.roomId} onChange={handleInputChange} required>
                    <option value="">Select a Room</option>
                    {rooms.map(room => (
                        <option key={room.id} value={room.id}>{room.type} - ${room.nightlyPrice}/night</option>
                    ))}
                </select>
                <input type="date" name="startDate" value={booking.startDate} onChange={handleInputChange} required />
                <input type="date" name="endDate" value={booking.endDate} onChange={handleInputChange} required />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookRoom;
