import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { FaLocationDot } from 'react-icons/fa6';
import { VscCalendar } from 'react-icons/vsc';
import { BiCategory } from 'react-icons/bi';
import { IoPerson } from 'react-icons/io5';
import { FaPenNib } from 'react-icons/fa';

const EventDetails = () => {

    const event = useLoaderData();
    const { _id, title, description, type, thumbnail, location, eventDate, createdBy, createdAt } = event

    const { user } = use(AuthContext)

    const navigate = useNavigate()

    const handleJoinEvent = () => {
        console.log("Join Button clicked");
        if (!user) {
            Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: "Please log in to join this event!",
            });
            navigate('/login');
        }

        const joinData = {
            eventId: _id,
            eventTitle: title,
            userEmail: user.email,
            eventDate: eventDate,
            location: location,
            type: type,
            thumbnail: thumbnail,
            joinedAt: new Date().toISOString(),
        };

        fetch("http://localhost:5000/join-event", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(joinData),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Joined event", data);

                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Joined Successfully!",
                        text: `You have joined ${title}`,
                        confirmButtonColor: "#E53E3E",
                    });
                }
            });
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-10 lg:my-20'>
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Event Details</h1>
            <p className='my-5 text-red-400 text-center'>See what’s planned, who’s involved, and how you can participate</p>

            <div className="flex flex-col gap-2 mx-auto p-6 max-w-3xl shadow-2xl mt-10">
                <img src={thumbnail} alt={title} className="rounded-lg w-full h-72 object-cover mb-6" />
                <h2 className="text-3xl text-center font-bold text-red-600 mb-2">{title}</h2>
                <div className='flex items-center gap-3'>
                    <FaLocationDot />
                    <p className="mt-2"><strong>  {location}</strong></p>
                </div>
                <div className='flex items-center gap-3'>
                    <VscCalendar />
                    <p className="text-sm text-gray-500">{new Date(eventDate).toDateString()}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <BiCategory />
                    <p>{type}</p>
                </div>

                <div className='flex items-center gap-3'>
                    <FaPenNib />
                    <p>Organized by: {createdBy}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">About this Event</h3>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>

                <button onClick={handleJoinEvent} className="btn btn-primary w-full">Join Event</button>
            </div>
        </div>
    );
};

export default EventDetails;