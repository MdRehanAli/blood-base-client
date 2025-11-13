import React from 'react';
import { Link } from 'react-router';

const JoinedEvent = ({ event }) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition'>
            <img
                src={event.thumbnail}
                alt={event.eventTitle}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                    {event.eventTitle}
                </h3>
                <p className="text-gray-600 mb-1">📅 {new Date(event.eventDate).toDateString()}</p>
                <p className="text-gray-600 mb-1">📍 {event.location}</p>
                <p className="text-gray-600 mb-3">🏷️ {event.type}</p>

                <Link
                    to={`/events/${event.eventId}`}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
                >
                    View Event
                </Link>
            </div>
        </div>
    );
};

export default JoinedEvent;