import React, { useState } from "react";
import './Modal.css';

export default function Modal({ show, onHide, onAddEvent }) {
        const [email, setEmail] = useState('');
        const [date, setDate] = useState('');
        const [description, setDescription] = useState('');

        const handleSubmit = () => {
                const newEvent = {
                        id: Math.random(),
                        date,
                        email,
                        description
                };
                onAddEvent(newEvent);
                onHide(); // Tutup modal setelah submit
        };

        if (!show) {
                return null;
        }

        return (
                <div className="modal-overlay">
                        <div className="modal">
                                <div className='modal-header'>
                                        <h3>Add Event</h3>
                                        <button className='close-btn' onClick={onHide}>Close</button>
                                </div>
                                <div className='modal-body'>
                                        <label>Email</label>
                                        <input
                                                type="text"
                                                placeholder="Insert Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label>Date</label>
                                        <input
                                                type="date"
                                                placeholder="Event Date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                        />
                                        <label>Description</label>
                                        <textarea
                                                placeholder="Event Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <button className="btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                        </div>
                </div>
        )
}
