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

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/upcoming-events',
                Component: UpcomingEvents
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