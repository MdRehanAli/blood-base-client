import React from 'react';
import { Link } from 'react-router';

const Event = ({ event }) => {
    const { _id, title, description, type, thumbnail, location, eventDate, createdBy, createdAt } = event
    return (
        <div className='shadow-2xl rounded-xl p-8'>
            <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl font-semibold mt-4 text-red-700">{title}</h3>
            <h3 className="text-xl font-semibold mt-4 text-red-700">{type}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
            <p className="mt-2"><strong>{location}</strong></p>
            <p className="text-sm text-gray-500">{eventDate}</p>
            <p>{createdBy}</p>
            <p>{createdAt}</p>
            <Link className='btn btn-primary w-full ' to={`/event-details/${_id}`}>View Event</Link>
        </div>
    );
};

export default Event;