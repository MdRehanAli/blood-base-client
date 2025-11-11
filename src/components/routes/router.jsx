import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout";
import Home from "../Home/Home";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

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
        ]
    }
]);

export default router;