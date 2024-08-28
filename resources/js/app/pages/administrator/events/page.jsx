import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout';
import Events from '@/app/components/Events';
import { fetch_events_thunk } from './redux/event-thunk';
import AddEvent from './sections/administrator-add-event-section';

export default function EventsPage() {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.events);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleEventAdded = () => {
        dispatch(fetch_events_thunk()); // Refresh the event list after an event is added
        handleClosePopup(); // Optionally close the popup
    };

    useEffect(() => {
        dispatch(fetch_events_thunk()); // Fetch events initially
    }, [dispatch]);

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
