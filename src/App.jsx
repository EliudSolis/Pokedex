import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeName } from "./store/slices/user.slice";
import PokemonDetails from './components/PokemonDetails'

function App() {
  let createUser = useSelector(state => state.userSlice)
  
  const dispatch = useDispatch()


  

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} ></Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}></Route>
            <Route path='pokedex/:name' element={<PokemonDetails/>}></Route>            
          </Route>
        </Routes>
    </div>
  )
}

export default App
