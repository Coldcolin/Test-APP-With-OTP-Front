import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Buddies from './Pages/Buddies';
import Discover from './Pages/Discover';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Settings from './Pages/Settings';
import Success from './Pages/Success';
import Verify from './Pages/Verify';
import Formatter from "./Components/Formatter"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Formatter />,
    children: [
      {
        path:"/home",
        element: <Home/>
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/buddies',
        element: <Buddies />
      },
      {
        path: '/discover',
        element: <Discover />
      },
    ]
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/reg',
    element: <Register />
  },
  {
    path: '/success',
    element: <Success />
  },
  {
    path: '/verify',
    element: <Verify />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
