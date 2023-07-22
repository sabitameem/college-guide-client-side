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
    ]
    },
  ]);