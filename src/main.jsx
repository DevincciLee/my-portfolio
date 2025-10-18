import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Experiences from './pages/Experiences.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([
  {path:'vinnySushiPortfolio/', element: <App />},
  {path:'vinnySushiPortfolio/info', element: <Homepage />},
  {path:'vinnySushiPortfolio/experiences', element: <Experiences />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
