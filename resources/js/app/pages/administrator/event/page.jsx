import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout';
import { get_event_thunk } from './redux/event-thunk';
import AddEvent from './sections/administrator-add-event-section';
import store from "@/app/store/store";

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

    useEffect(() => {
        store.dispatch(get_event_thunk()); // get events initially
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

            <AddEvent isOpen={isPopupOpen} onClose={handleClosePopup} />

            <div className='flex flex-wrap gap-4 place-content-start mt-12 ml-44'>
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <a href="#">
                            <img className="rounded-t-lg" src="https://empireonecontactcenter.com/wp-content/uploads/2023/03/Contact-Center-logo.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
}
