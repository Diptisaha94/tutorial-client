import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Courses from "./Courses";
import Faq from "./Faq";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/courses",
                element:<Courses></Courses>
            },
            {
                path:"/faq",
                element:<Faq></Faq>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
])
export default router;