import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout";
import Home from "../Home/Home";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Login from "../Login/Login";
import Register from "../../Register/Register";

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
        ]
    }
]);

export default router;