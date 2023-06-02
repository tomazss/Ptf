import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./styles/main.sass";

//1-configuarando router
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

import Projects from '../routes/Projects';
import Tecnologies from '../routes/Tecnologies';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Tecnologies/>
      },
      {
        path:"projetos",
        element:<Projects/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
