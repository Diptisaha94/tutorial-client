import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Courses from "./Courses";
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
                path:"/blog",
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
                            return fetch(`http://localhost:5000/catagory/courses/${params.id}`)
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
                element:<Privateroute><Primeum></Primeum></Privateroute>
            },
            {
                path:"/detail/course/:id",
                element:<Onecourses></Onecourses>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
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