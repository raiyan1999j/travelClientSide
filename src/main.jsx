import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ClientSide/Home/Home.jsx'
import LogInSignUp from './ClientSide/LogInSignUp/LogInSignUP.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </StrictMode>,
)
