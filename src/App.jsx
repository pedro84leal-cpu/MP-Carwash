import { Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Reservas from './assets/Components/Reservas/reservas'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservas' element={<Reservas />} />
    </Routes>
  )
}

export default App