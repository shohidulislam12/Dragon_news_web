import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layout/HomeLayout.jsx';
import CategoriNews from './Pages/CategoriNews/CategoriNews.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import LoginForm from './Components/Login/LoginForm.jsx';
import FormRegister from './Components/Login/FormRegister.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import NewsDetails from './Pages/NewsDetails.jsx';
import PrivetRaoute from './Privet/PrivetRaoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Navigate to="/catagori/01"> </Navigate>
      },
      {
        path:"/catagori/:id",
        element:<CategoriNews></CategoriNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: "news/:id",
    element:<PrivetRaoute><NewsDetails></NewsDetails></PrivetRaoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path: "/auth/login",
        element:<LoginForm></LoginForm>
      },
      {
        path: "/auth/register",
        element:<FormRegister></FormRegister>
      },
    ]
  },

  {
    path: "*",
    element: <h2>no path defines</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
