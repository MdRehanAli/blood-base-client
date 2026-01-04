import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import JoinedEvents from "../pages/JoinedEvents/JoinedEvents";
import Loading from "../components/Loading/Loading";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Contact from "../pages/Contact/Contact/Contact";
import Blog from "../pages/Blog/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUS/AboutUs";


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
                loader: () => fetch('https://blood-base-server.vercel.app/events'),
                Component: UpcomingEvents
            },
            {
                path: '/event-details/:id',
                loader: ({ params }) => fetch(`https://blood-base-server.vercel.app/events/${params.id}`),
                Component: EventDetails
            },
            {
                path: '/about-us',
                Component: AboutUs
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/blogs',
                Component: Blog
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },

        ]
    }
]);

export default router;