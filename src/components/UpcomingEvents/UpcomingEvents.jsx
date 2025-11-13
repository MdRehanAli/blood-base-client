import React from 'react';
import { useLoaderData } from 'react-router';
import Event from './Event';

const UpcomingEvents = () => {

    const events = useLoaderData();

    console.log(events);

    return (
        <div>
            <div>
                {
                    events.map(event => <Event event={event} key={event._id}></Event>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;