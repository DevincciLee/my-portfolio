import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About.jsx'
import Experiences from './pages/Experiences.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage.jsx'

const router = createBrowserRouter([
  {path:'/', element: <LoadingPage />},
  {path:'/home', element: <App />},
  {path:'/about', element: <About />},
  {path:'/experiences', element: <Experiences />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
