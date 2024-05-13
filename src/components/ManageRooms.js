import React, { useState, useEffect } from 'react';

const ManageRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [form, setForm] = useState({ id: '', type: '', monthlyPrice: '', nightlyPrice: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/rooms');
            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error('Failed to fetch rooms:', error);
            setError('Failed to fetch rooms');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = form.id ? 'PUT' : 'POST';
        const url = form.id ? `http://localhost:8080/api/rooms/${form.id}` : 'http://localhost:8080/api/rooms';

        try {
            await fetch(url, {
                method: method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form)
            });
            fetchRooms(); // Refresh the room list
            setForm({ id: '', type: '', monthlyPrice: '', nightlyPrice: '' }); // Reset form
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to perform the operation');
        }
    };

    const handleEdit = (room) => {
        setForm(room);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/rooms/${id}`, { method: 'DELETE' });
            fetchRooms(); // Refresh the room list
        } catch (error) {
            console.error('Failed to delete room:', error);
            setError('Failed to delete room');
        }
    };

    return (
        <div>
            <h1>Manage Rooms</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={form.id} name="id" />
                <input
                    type="text"
                    placeholder="Type"
                    value={form.type}
                    onChange={handleChange}
                    name="type"
                    required
                />
                <input
                    type="number"
                    placeholder="Monthly Price"
                    value={form.monthlyPrice}
                    onChange={handleChange}
                    name="monthlyPrice"
                    required
                />
                <input
                    type="number"
                    placeholder="Nightly Price"
                    value={form.nightlyPrice}
                    onChange={handleChange}
                    name="nightlyPrice"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {rooms.map(room => (
                        <li key={room.id}>
                            {room.type} - €{room.monthlyPrice}/month - €{room.nightlyPrice}/night
                            <button onClick={() => handleEdit(room)}>Edit</button>
                            <button onClick={() => handleDelete(room.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ManageRooms;
