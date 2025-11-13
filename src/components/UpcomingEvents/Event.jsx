import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { VscCalendar } from 'react-icons/vsc';
import { Link } from 'react-router';

const Event = ({ event }) => {
    const { _id, title, description, type, thumbnail, location, eventDate, createdBy, createdAt } = event
    return (
        <div className='flex flex-col justify-between h-full shadow-2xl rounded-xl p-8 gap-2'>
            <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-xl" />
            <h3 className="text-xl text-center font-semibold mt-4 text-red-700">{title}</h3>
            <h3 className="text-md font-semibold mt-4"><span className='font-bold'>Event type:</span> <span className=' text-red-700'>{type}</span></h3>
            <p className="text-gray-600 mt-1 text-justify"><span className='font-bold'>Description:</span> {description}</p>
            <div className='flex items-center gap-3'>
                <FaLocationDot />
                <p className=""><strong>  {location}</strong></p>
            </div>
            <div className='flex items-center gap-3'>
                <VscCalendar />
                <p className="text-sm text-gray-500">{eventDate}</p>
            </div>
            <div className='flex items-center gap-3'>
                <IoPerson />
                <p>{createdBy}</p>
            </div>
            <div className='flex items-center gap-3'>
                <FaPenNib />
                <p>{createdAt}</p>
            </div>
            <div className='mt-4'>
                <Link className='btn btn-primary w-full ' to={`/event-details/${_id}`}>View Event</Link>
            </div>
        </div>
    );
};

export default Event;