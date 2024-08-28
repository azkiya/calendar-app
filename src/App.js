import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './App.css'
import Sidebar from './component/Sidebar'

const localizer = momentLocalizer(moment)
export default function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  }
  return (
    <div className='calendar-container'>
      <div className='btn-container'>
        <button className='btn-event' onClick={toggleOffcanvas}>
          Add Event
        </button>
        <Sidebar show={showOffcanvas} onHide={toggleOffcanvas} />
      </div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
      />
    </div>
  )
}