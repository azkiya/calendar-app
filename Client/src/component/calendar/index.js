import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
// import Sidebar from './component/Sidebar';
import Modal from '../modal/index';

import axios from 'axios';

const localizer = momentLocalizer(moment)
export default function MyCalendar() {
        const [showOffcanvas, setShowOffcanvas] = useState(false);
        const [events, setEvents] = useState([]);
        const [selectedEvent, setSelectedEvent] = useState(null);

        useEffect(() => {
                // Ambil semua event dari backend
                axios.get('http://localhost:4000/api/events')
                        .then(response => {
                                const formattedEvents = response.data.map(event => {
                                        const { date } = event;
                                        const startDate = moment(date).startOf('day').toDate(); // Start of day
                                        const endDate = moment(date).endOf('day').toDate();   // End of day
                                        return {
                                                title: event.email,
                                                start: startDate,
                                                end: endDate,
                                        };
                                });

                                setEvents(formattedEvents);
                        })
                        .catch(error => console.error('Gagal mengambil event:', error));
        }, []);

        const toggleOffcanvas = () => {
                setShowOffcanvas(!showOffcanvas);
        }
        const handleAddEvent = (newEvent) => {
                setShowOffcanvas(false);
                // Simpan event ke backend
                axios.post('http://localhost:4000/api/events', newEvent)
                        .then(response => {
                                const formattedEvent = {
                                        title: response.data.email,
                                        start: moment(response.data.date).startOf('day').toDate(),
                                        end: moment(response.data.date).endOf('day').toDate()
                                };
                                //menampilkan email yg diadd
                                setEvents(prevEvents => [...prevEvents, formattedEvent]);

                                // Kirim email setelah event berhasil disimpan
                                const emailData = {
                                        senderEmail: 'isthofany.dev@gmail.com',  // Sesuaikan dengan email sender yang sudah divalidasi
                                        recipientEmail: response.data.email,  // Kirim email ke alamat yang diinputkan
                                };

                                axios.post('http://localhost:4000/api/send-email', emailData)
                                        .then(emailResponse => {
                                                console.log('Email sent successfully:', emailResponse.data);
                                        })
                                        .catch(emailError => {
                                                console.error('Failed to send email:', emailError);
                                        });
                        })
                        .catch(error => console.error('Gagal menyimpan event:', error));
        }

        return (
                <div className='calendar-container'>
                        <div className='btn-container'>
                                <button className='btn-event' onClick={() => { setSelectedEvent(null, toggleOffcanvas()); }}>
                                        Add Event
                                </button>
                                <Modal
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