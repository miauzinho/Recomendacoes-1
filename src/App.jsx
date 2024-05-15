import './global.css'
import {Inicial} from './paginas/Inicial'
import {Login} from './paginas/Login'
import {BrowserRouter} from 'react-router-dom'
import {Rotas} from './rotas/Rotas'

export function App() {
  return (
    <BrowserRouter>
    <Rotas/>
    </BrowserRouter>
  )
}
