import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Border from './pages/border/Border'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/border-styling' element={<Border/>}/>
      </Routes>
    </>
  )
}

export default App
