import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Habits from './Components/Habits'
import Today from './Components/Today'
import UserContext from './context'
import { useState } from 'react'

export default function App(){
    const [api, setApi] = useState(null)

    return (
        <BrowserRouter>
            <UserContext.Provider value={{api, setApi}}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}