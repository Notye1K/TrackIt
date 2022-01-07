import Container from "./style"
import check from '../Images/check.svg'
import {useContext, useEffect, useState} from 'react'
import UserContext from '../../context'
import axios from "axios"

export default function HabitToday(){
    const {api} = useContext(UserContext)

    const [habits, setHabits] = useState([])

    useEffect(
        () => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            { headers: { Authorization: `Bearer ${api.token}` } })
            promise.then(response => setHabits(response.data))
            promise.catch(erro => alert(erro.response.data.details))
        }, [api.token]
    )
    
    return (
        <Container>
            {habits.length === 0 ? "você não tem nenhum hábito cadastrado para hoje" : <Habit />}
        </Container>
    )
}

function Habit(){
    return(
        <>
            <div className="info">
                <h1>Ler 1 capítulo de livro</h1>
                <p className='inf'>Sequência atual: <span>4 dias</span></p>
                <p className='inf'>Seu recorde: <span>5 dias</span></p>
            </div>
            <div className="status">
                <img src={check} alt="check" />
            </div>
        </>
    )
}