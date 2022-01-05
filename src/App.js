import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Habits from './Components/Habits'

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/habitos' element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}