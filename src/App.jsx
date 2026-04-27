import { Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Reservas from './assets/Components/Reservas/reservas'
import Galeria from './assets/Pages/Galeria/galeria'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservas' element={<Reservas />} />
      <Route path='/galeria' element={<Galeria />} />
    </Routes>
  )
}

export default App