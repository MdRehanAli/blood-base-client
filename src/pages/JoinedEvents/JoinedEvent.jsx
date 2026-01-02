import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { VscCalendar } from 'react-icons/vsc';
import { Link } from 'react-router';

const JoinedEvent = ({ event }) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition'>
            <img src={event.thumbnail} alt={event.eventTitle} />
            <div className="p-6">
                <h3 className="text-xl font-bold text-primary text-center my-4">{event.eventTitle}</h3>

                <div className='flex items-center gap-3'>
                    <VscCalendar />
                    <p className="text-gray-600"> {new Date(event.eventDate).toDateString()}</p>
                </div>

                <div className='flex items-center gap-3 my-3'>
                    <FaLocationDot />
                    <p className="text-gray-600"> {event.location}</p>
                </div>

                <div className='flex items-center gap-3'>
                    <BiCategory />
                    <p className="text-gray-600"> {event.type}</p>
                </div>

                <div className='flex justify-center mt-6 mb-3'>
                    <Link to={`/event-details/${event.eventId}`} className="btn btn-primary" > View Event </Link>
                </div>
            </div>
        </div>
    );
};

export default JoinedEvent;