import { Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import FormMarcacao from './assets/Components/Formulario-marcacao/FormMar'

function App() {
  return (
    <Routes>
      <Route path='/formMarc' element={<FormMarcacao />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App