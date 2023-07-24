import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Home/Home";
import SignUp from "../Pages/SIgnUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import UserProfile from "../Pages/userProfile/UserProfile";
import CollegeDetails from "../Pages/collegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRoute";
import JohnDoe from "../Pages/JohnDoe/JohnDoe";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/login',
          element : <Login></Login>
        },
        {
          path: '/signUp',
          element : <SignUp></SignUp>
        },
        {
          path: '/colleges',
          element: <Colleges></Colleges>
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/myCollege',
          element: <MyCollege></MyCollege>
        },
        {
          path: '/userProfile',
          element: <UserProfile></UserProfile>
        },
        {
          path: '/collegeDetails/:id',
          element:<PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute> ,
          //loader: ({params})=> fetch(`http://localhost:5000/collegedata/${params.id}`)
          loader: ({params})=> fetch(`https://college-guide-server.vercel.app/collegedata/${params.id}`)
        },
        {
          path: '/johnDoe',
          element:<JohnDoe></JohnDoe>
        }
    ]
    },
  ]);