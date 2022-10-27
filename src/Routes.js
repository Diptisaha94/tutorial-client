import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Courses from "./Courses";
import Errorpage from "./Errorpage";
import Faq from "./Faq";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Onecourses from "./Onecourses";
import Primeum from "./Primeum";
import Privateroute from "./Privateroute";
import Register from "./Register";
import Singlecourses from "./Singlecourses";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/public",
                element:<Blog></Blog>
            },
            {
                path:"/courses",
                element:<Courses></Courses>,
                children:[
                    {
                        path:"/courses/:id",
                        element:<Singlecourses></Singlecourses>,
                        loader: ({params}) => {
                            return fetch(`https://tutorial-server-bice.vercel.app/catagory/courses/${params.id}`)
                          },
                    },
                ]
            },
            {
                path:"/faq",
                element:<Faq></Faq>
            },
            {
                path:"/cheakout",
                element:<Privateroute><Primeum></Primeum></Privateroute>,
            },
            {
                path:"/cheakout/:id",
                element:<Primeum></Primeum>,
                loader: ({params}) => {
                    return fetch(`https://tutorial-server-bice.vercel.app/cheakout/${params.id}`)
                  },
            },
            {
                path:"/detail/course/:id",
                element:<Onecourses></Onecourses>,
                loader: ({params}) => {
                    return fetch(`https://tutorial-server-bice.vercel.app/courses/${params.id}`)
                  },
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
])
export default router;