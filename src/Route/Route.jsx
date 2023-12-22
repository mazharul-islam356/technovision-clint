import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login/Login";
import SignUp from "../Components/Authentication/SignUp/SignUp";

import CreateT from "../Components/DashBoard/dash/CreateT";
import DashBoard from "../Layout/DashBoard";
import MainLayout from "../Layout/MainLayout";
import Previous from "../Components/DashBoard/dash/Previous";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
    ],
  },
  {
    path:'/dashBoard',
    element: <DashBoard></DashBoard>,
    children:[
      {
        path:'createT',
        element: <CreateT></CreateT>
      },
      {
        path:'previous',
        element: <Previous></Previous>
      }
    ]
},

]);
