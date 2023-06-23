import { Navigate, createBrowserRouter}
from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import RecipeSection from "../Pages/RecipeSection.jsx/RecipeSection";
import ErrorPage from "../Pages/Error/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chefs/:id',
                element: <PrivateRoute><RecipeSection></RecipeSection></PrivateRoute>,
                loader:({params}) => fetch(`https://thai-food-server-shihab066.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/home",
        element: <Main></Main>,        
    },
]);