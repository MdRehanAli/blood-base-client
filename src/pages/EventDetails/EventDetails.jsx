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

        fetch("https://blood-base-server.vercel.app/join-event", {
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
                        iconColor: "#E53E3E",
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
            <p className='my-3 text-red-400 text-center'>See what's planned, who's involved, and how you can participate</p>

            <div className=' mx-auto p-6 mb-8 rounded-lg mt-10 border border-red-100'>
                <div className=" flex flex-col md:flex-row gap-5 items-center">
                    <div className='flex-1'>
                        <img src={thumbnail} alt={title} className="rounded-lg w-full object-cover" />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <h2 className="text-2xl md:text-3xl text-center font-bold text-red-600 mb-4">{title}</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            {/* <h3 className="text-xl font-semibold mb-2 text-gray-800">About this Event</h3> */}
                            <p className="text-gray-700 leading-relaxed text-justify">{description}</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <FaLocationDot className='top-1 relative'/>
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
                        <button onClick={handleJoinEvent} className="btn btn-primary w-full mt-3">Join Event</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;