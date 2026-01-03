import React from 'react';
import { useLoaderData } from 'react-router';
import Event from './Event';

const UpcomingEvents = () => {

    const events = useLoaderData();

    console.log(events);

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-10 md:my-20'>
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Upcoming Events</h1>
            <p className='my-3 text-red-400 text-center'>Join us in making a difference, check out what’s coming next</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-stretch mt-8'>
                {
                    events.map(event => <Event event={event} key={event._id}></Event>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;