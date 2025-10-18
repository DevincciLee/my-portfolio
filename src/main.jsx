import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Experiences from './pages/Experiences.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([
  {path:'my-portfolio/', element: <App />},
  {path:'my-portfolio/info', element: <Homepage />},
  {path:'my-portfolio/experiences', element: <Experiences />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
