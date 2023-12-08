import { createBrowserRouter, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup/Signup";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import Login from "./views/Login/Login.jsx";
import Chat from "./views/Chat/Chat.jsx";
import MensajeEnviado from "./views/BubbleMensajeEnviado/MensajeEnviado.jsx";
import UserBody from "./views/profile/UserBody.jsx";
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Carga from "./views/Carga/Carga.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },

      {
        path: '/dashboard',
        element: <Dashboard />

      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }

    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;
