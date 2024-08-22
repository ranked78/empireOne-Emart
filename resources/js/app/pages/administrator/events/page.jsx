import React, { useState, useEffect } from 'react';
import MainLayout from '../layout';
import Events from '@/app/components/Events';
import AddEvent from '@/app/pages/administrator/_sections/add-event';
import { get_events_service } from '@/app/services/events-service';


export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const fetchEvents = async () => {
        const data = await get_events_service();
        setEvents(data.result);
    };

    useEffect(() => {
        fetchEvents(); // Fetch events initially
    }, []);

    const handleEventAdded = () => {
        fetchEvents(); // Refresh the event list after an event is added
        handleClosePopup(); // Optionally close the popup
    };

    return (
        <MainLayout>
            <a
                href="#"
                onClick={handleOpenPopup}
                className="mt-10 ml-40 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Events
            </a>

            <AddEvent isOpen={isPopupOpen} onClose={handleClosePopup} onEventAdded={handleEventAdded} />

            <Events events={events} />
        </MainLayout>
    );
}
