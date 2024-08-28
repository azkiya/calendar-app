import React from "react";
import './Sidebar.css'

export default function Sidebar({ show, onHide }) {
        return (
                <div className={`sidebar ${show ? 'show' : ''}`}>
                        <div className='sidebar-content'>
                                <div className='sidebar-header'>
                                        <h3>Add Event</h3>
                                        <button className='close-btn' onClick={onHide}>Close</button>
                                </div>
                                <div className='sidebar-body'>
                                        <label>Title</label>
                                        <input
                                                type="text"
                                                placeholder="Event Title"
                                        />
                                        <label>Date</label>
                                        <input
                                                type="date"
                                                placeholder="Event Title"
                                        />
                                        <label>Start Time</label>
                                        <input
                                                type="time"
                                                placeholder="Event Title"
                                        />
                                        <label>End Time</label>
                                        <input
                                                type="time"
                                                placeholder="Event Title"
                                        />
                                        <button className="btn-primary">Submit</button>
                                </div>
                        </div>
                </div>
        )
}