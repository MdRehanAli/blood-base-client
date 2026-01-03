import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const CreateEvent = () => {
    const { user } = use(AuthContext)

    const [select, setSelect] = useState("Blood Donation");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

    const handleCreateEvent = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const image = form.image.value;
        const location = form.location.value;
        const email = form.email.value;

        console.log(title, description, select, image, location, startDate, email);

        const newEvent = {
            title: title,
            description: description,
            type: select,
            thumbnail: image,
            location: location,
            eventDate: title,
            createdBy: email,
            createdAt: startDate,
        }

        fetch('https://blood-base-server.vercel.app/events', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log("After Created Event", data);

                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Event Created Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })

        form.reset();
        navigate('/upcoming-events');
    }


    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>

            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 text-black">
                <h2 className="text-center text-2xl md:text-5xl font-bold text-red-600 mb-6">Create New Event</h2>
                <form onSubmit={handleCreateEvent} className="space-y-4">
                    {/* Title */}
                    <input type="text" name='title' placeholder="Event Title" className="w-full border p-2 border-primary rounded" required />

                    {/* Description  */}

                    {/* Event Type  */}
                    <select value={select} onChange={(e) => setSelect(e.target.value)} className="w-full border p-2 border-primary rounded">
                        <option className='font-bold text-red-500' value="Blood Donation">Select Blood Donation Campaign</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Cleanup">Cleanup</option>
                        <option value="Awareness">Awareness</option>
                        <option value="Health Checkup">Health Checkup</option>
                    </select>

                    {/* Image  */}
                    <input type="text" name='image' placeholder="Thumbnail Image URL" className="w-full border p-2 border-primary rounded" required />

                    {/* Location  */}
                    <input type="text" name='location' placeholder="Location" className="w-full border p-2 border-primary rounded" required />

                    {/* Date  */}
                    <DatePicker className='w-full border p-2 border-primary mr-60 rounded' selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />

                    {/* Email  */}
                    <input type="email" name='email' value={user?.email} disabled className="w-full border p-2 border-primary rounded bg-gray-100" />
                    <button type="submit" className="w-full btn btn-primary">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;