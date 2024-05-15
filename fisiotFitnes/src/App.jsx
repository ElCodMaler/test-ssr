import React from 'react'
import './styles/App.css'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
 } from 'react-router-dom'

 import LayoutRout from './Layout/LayoutRout'
 import Home from './pages/home'
 import Segundo from './pages/segundo'

// Works also with SSR as expected

//crear rutas
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayoutRout/>}>
      <Route path='home' element={<Home/>} />
      <Route path='segundo' element={<Segundo/>} />
    </Route>
  )
)

function App() {
  return (
    <>
      <div className="uni">
        <h1>hola mariko</h1>
      </div>
    </>
  )
}

export default App
