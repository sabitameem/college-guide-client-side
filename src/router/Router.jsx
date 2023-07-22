import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Home/Home";
import SignUp from "../Pages/SIgnUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
    ]
    },
  ]);