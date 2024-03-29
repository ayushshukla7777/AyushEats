
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from "@/layouts/layout";
import HomePage from "@/pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><HomePage /></Layout>,
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]);

export default router;