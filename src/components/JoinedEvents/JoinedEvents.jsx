// JoinedEvents.jsx
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import JoinedEvent from "./JoinedEvent";

const JoinedEvents = () => {
    const { user } = use(AuthContext);
    const [joinedEvents, setJoinedEvents] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/join-event?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // Sort by event date
                    const sorted = data.sort(
                        (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
                    );
                    setJoinedEvents(sorted);
                });
        }
    }, [user]);

    if (!user) {
        return (
            <div className="text-center py-20 text-lg text-gray-600">
                Please log in to view your joined events.
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
                My Joined Blood Donation Events
            </h2>

            {joinedEvents.length === 0 ? (
                <p className="text-center text-gray-500">You haven’t joined any events yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {joinedEvents.map(event => <JoinedEvent event={event} key={event._id}></JoinedEvent>)}
                </div>
            )}
        </div>
    );
};

export default JoinedEvents;
