import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './App.css'
import Sidebar from './component/Sidebar'

const localizer = momentLocalizer(moment)
export default function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  }
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowOffcanvas(false);
  }

  return (
    <div className='calendar-container'>
      <div className='btn-container'>
        <button className='btn-event' onClick={() => { setSelectedEvent(null, toggleOffcanvas()); }}>
          Add Event
        </button>
        <Sidebar
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          onAddEvent={handleAddEvent}
          selectedEvent={selectedEvent}
        />
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
      />
    </div >
  )
}