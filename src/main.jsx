import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Applied from './Components/Applied/Applied';
import Error from './Components/ErrorPage/Error';
import Home from './Components/Home/Home';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>

    },
     
     
     
      {
        path:"/applied",
        element:<Applied></Applied>,
       
      },

      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch ('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
