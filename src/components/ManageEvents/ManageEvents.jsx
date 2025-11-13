// ManageEvents.jsx
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const ManageEvents = () => {
    const { user } = use(AuthContext);
    const [myEvents, setMyEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    // Fetch events created by the logged-in user
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/events?createdBy=${user.email}`)
                .then(res => res.json())
                .then(data => setMyEvents(data));
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

        fetch(`http://localhost:5000/events/${editingEvent._id}`, {
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
                fetch(`http://localhost:5000/events?createdBy=${user.email}`)
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
                fetch(`http://localhost:5000/events/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Your event has been deleted.", "success");
                        setMyEvents(myEvents.filter(ev => ev._id !== id));
                    });
            }
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
                Manage My Blood Donation Events
            </h2>

            {/* If no events */}
            {myEvents.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t created any events yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myEvents.map(event => (
                        <div
                            key={event._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
                        >
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-red-600 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-1">📅 {new Date(event.eventDate).toDateString()}</p>
                                <p className="text-gray-600 mb-1">📍 {event.location}</p>
                                <p className="text-gray-600 mb-3">🏷️ {event.type}</p>

                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setEditingEvent(event)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
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
