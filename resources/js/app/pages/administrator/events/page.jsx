import React from 'react';
import MainLayout from '../layout';
import Events from '@/Components/Events';
import EventsComponent from '@/app/components/EventsComponent';

export default function EventsPage() {
    return (
        <MainLayout>
            {/* <Events/> */}
            <EventsComponent/>
        </MainLayout>
    );
}
