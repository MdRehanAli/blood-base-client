// ManageEvents.jsx
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { VscCalendar } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";

const ManageEvents = () => {
    const { user } = use(AuthContext);
    const [myEvents, setMyEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    // Fetch events created by the logged-in user
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/join-event?createdBy=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyEvents(data);


                });
        }
    }, [user]);

    // Handle update
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value
        const description = form.description.value
        const type = form.type.value
        const thumbnail = form.thumbnail.value
        const location = form.location.value
        const eventDate = form.eventDate.value

        console.log(title, description, type, thumbnail, location, eventDate);

        const updatedEvent = {
            title: title,
            description: description,
            type: type,
            thumbnail: thumbnail,
            location: location,
            eventDate: eventDate
        };

        fetch(`http://localhost:5000/join-event/${editingEvent._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedEvent),
        })
            .then(res => res.json())
            .then(data => {
                console.log("After Update", data)
                Swal.fire({
                    icon: "success",
                    title: "Updated Successfully",
                    text: "Your event has been updated!",
                });
                setEditingEvent(null);
                // Refresh events
                fetch(`http://localhost:5000/join-event?createdBy=${user.email}`)
                    .then(res => res.json())
                    .then(data => setMyEvents(data));
            });
    };

    // Handle delete (optional)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This event will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#E53E3E",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/join-event/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Your event has been deleted.",
                            "success"
                        );
                        setMyEvents(myEvents.filter(ev => ev._id !== id));
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto w-11/12 my-10 lg:my-20">
            <h1 className='text-center text-3xl md:text-5xl font-bold text-red-600'>Manage Events</h1>
            <p className='my-5 text-red-400 text-center'>Keep your events organized to make a bigger impact</p>

            {/* If no events */}
            {myEvents.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t created any events yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {myEvents.map(event => (
                        <div
                            key={event._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition h-full"
                        >
                            <img src={event.thumbnail} alt={event.title} className="" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-primary text-center my-4">{event.eventTitle}</h3>

                                <div className='flex items-center gap-3'>
                                    <FaLocationDot />
                                    <p className="text-gray-600">{event.location}</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <VscCalendar />
                                    <p className="text-gray-600 my-3">{new Date(event.eventDate).toDateString()}</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <BiCategory />
                                    <p className="text-gray-600">{event.type}</p>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => setEditingEvent(event)}
                                        className="btn bg-green-600 text-white"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        className="btn btn-primary"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Form Modal */}
            {editingEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <form
                        onSubmit={handleUpdate}
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
                    >
                        <h3 className="text-2xl font-semibold text-center text-red-600">
                            Update Event
                        </h3>

                        <input name="title" defaultValue={editingEvent.title} className="border p-2 w-full rounded" />
                        <textarea name="description" defaultValue={editingEvent.description} className="border p-2 w-full rounded" />
                        <input name="type" defaultValue={editingEvent.type} className="border p-2 w-full rounded" />
                        <input name="thumbnail" defaultValue={editingEvent.thumbnail} className="border p-2 w-full rounded" />
                        <input name="location" defaultValue={editingEvent.location} className="border p-2 w-full rounded" />

                        <input
                            type="date"
                            name="eventDate"
                            defaultValue={editingEvent.eventDate.slice(0, 10)}
                            min={new Date().toISOString().split("T")[0]}
                            className="border p-2 w-full rounded"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setEditingEvent(null)}
                                className="bg-gray-300 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ManageEvents;
