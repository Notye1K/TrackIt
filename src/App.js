import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Habits from './Components/Habits'
import Today from './Components/Today'
import UserContext from './context'
import { useState, useEffect } from 'react'
import History from './Components/History'

export default function App() {
    const login = JSON.parse(localStorage.getItem('user'))

    const [api, setApi] = useState(login)
    const [habitsToday, setHabitsToday] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let c = 0
        habitsToday.map(i => {
            if (i.done) {
                c++
            }
        })
        setCounter(c)
    }, [habitsToday])

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ api, setApi, habitsToday, setHabitsToday, counter }}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico' element={<History />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}