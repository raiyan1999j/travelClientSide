import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ClientSide/Home/Home.jsx'
import LogInSignUp from './ClientSide/LogInSignUp/LogInSignUP.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Dashboard/Dashboard.jsx'
import CreateService from './Dashboard/CreateService/CreateService.jsx'
import CreateEvent from './Dashboard/CreateEvent/CreateEvent.jsx'
import CreateOffers from './Dashboard/CreateOffers/CreateOffers.jsx'
import CreateUsual from './Dashboard/CreateUsual/CreateUsual.jsx'

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/signup",
        element:<LogInSignUp/>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard/createService",
        element:<CreateService/>
      },
      {
        path:"/dashboard/createEvent",
        element:<CreateEvent/>
      },
      {
        path:"/dashboard/createOffers",
        element:<CreateOffers/>
      },
      {
        path:"/dashboard/createUsual",
        element:<CreateUsual/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </QueryClientProvider>
  </StrictMode>,
)
