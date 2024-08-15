import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './assets/components/MasterLayout/MasterLayout'
import NotFound from './assets/components/NotFound/NotFound'
import Home from './assets/components/Home/Home'
import View from './assets/components/View/View'
import Show from './assets/components/Show/Show'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/view", element: <View /> },
      { path: "/show", element: <Show /> },
    ],
  },
]);
function App() {


  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
