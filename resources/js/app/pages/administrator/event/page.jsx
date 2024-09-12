import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../layout';
import { get_event_thunk } from './redux/event-thunk';
import store from "@/app/store/store";
import CreateEventSection from './sections/create-event-section';
import EditEventSection from './sections/edit-event-section';
import EventCard from '@/app/components/event-card';
import DeleteEventSection from './sections/delete-event-section';

export default function EventsPage() {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.event);

    useEffect(() => {
        store.dispatch(get_event_thunk());
    }, [dispatch]);

    const columns = ['name', 'event_date', 'points', 'description', 'read_more', 'action'];

    const data = events.map((res) => ({
        ...res,
        action: (
            <div className="flex gap-4">
                <EditEventSection datas={res} />
                <DeleteEventSection datas={res} />
            </div>
        ),
    }));

    return (
        <MainLayout>

            <CreateEventSection />

            <EventCard
                datas={data}
                columns={columns}
            />

        </MainLayout>
    );
}
