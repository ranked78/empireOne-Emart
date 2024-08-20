import React, { useState, useEffect } from 'react';
import { get_events_service } from '../services/events-service';


const EventsComponent = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    
  
    useEffect(() => {
      async function fetchEvents() {
        const data = await get_events_service();
        const dataArray = data.result;
        
        console.log("Fetched data:", dataArray); // Log the data to inspect the structure
  
        // Check if the response is an error
        if (data instanceof Error) {
          setError(data);
        } else if (Array.isArray(dataArray)) {
          setEvents(dataArray); // Set the fetched data to state if it's an array
        } else {
          console.error("Unexpected data format:", data);
          setError(new Error("Unexpected data format"));
        }
      }
  
      fetchEvents();
    }, []);
  

    
    return (
      <div>
       {events.map((events) => (
<div key={events.id}>{events.id}{events.title}</div>
))}
      </div>
    );
  };
  
  export default EventsComponent;
