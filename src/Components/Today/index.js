import Footer from "../Footer"
import HabitToday from "../HabitToday"
import Header from "../Header"
import Container from './style'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../context'
import axios from "axios"
import getHabits from '../getHabits'


export default function Today() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    let week = date.getDay()
    week = handleWeek(week)

    const { api, habitsToday, setHabitsToday, counter } = useContext(UserContext)

    const [check, setCheck] = useState(true)

    useEffect(
        () => getHabits(setHabitsToday, api), [api.token, check, setHabitsToday]
    )

    function handleClick(id, status) {
        let promise
        if (status) {
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, '',
                { headers: { Authorization: `Bearer ${api.token}` } })
        }
        else {
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, '',
                { headers: { Authorization: `Bearer ${api.token}` } })
        }
        promise.then(() => setCheck(!check))
        promise.catch(erro => alert(erro.response.data.details))
    }

    const percentage = counter * 100 / habitsToday.length
    const progress = counter > 0

    return (
        <>
            <Header />
            <Container progress={progress}>
                <div className='space' />
                <h1 className='day'>{week}, {day}/{month}</h1>
                <p>{progress ? `${percentage}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</p>
                <div className="habits">
                    {habitsToday.length === 0 ? "Você não tem nenhum hábito cadastrado para hoje" : habitsToday.map(
                        i => <HabitToday key={i.id} id={i.id} name={i.name} done={i.done} click={handleClick}
                            sequence={i.currentSequence} record={i.highestSequence} />)}
                </div>
                <div className='space' />
            </Container>
            <Footer />
        </>
    )
}

function handleWeek(week) {
    if (week === 0) {
        week = 'Domingo'
    } else if (week === 1) {
        week = 'Segunda'
    } else if (week === 2) {
        week = 'Terça'
    } else if (week === 3) {
        week = 'Quarta'
    } else if (week === 4) {
        week = 'Quinta'
    } else if (week === 5) {
        week = 'Sexta'
    } else if (week === 6) {
        week = 'Sabado'
    }
    return week
}