import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout";
import Home from "../Home/Home";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Login from "../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../CreateEvent/CreateEvent";
import ManageEvents from "../ManageEvents/ManageEvents";
import JoinedEvents from "../JoinedEvents/JoinedEvents";
import EventDetails from "../EventDetails/EventDetails";
import Loading from "../Loading/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/upcoming-events',
                loader: () => fetch('http://localhost:5000/events'),
                Component: UpcomingEvents
            },
            {
                path: '/event-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`),
                Component: EventDetails
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/create-event',
                element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
            },
            {
                path: '/manage-events',
                element: <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
            },
            {
                path: '/joined-events',
                element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
            },
        ]
    }
]);

export default router;