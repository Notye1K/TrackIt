import Calendar from 'react-calendar'
import { useState, useContext, useEffect } from 'react'
import 'react-calendar/dist/Calendar.css'
import axios from 'axios'
import UserContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import Container from './style'

export default function History() {
    const [value, onChange] = useState(new Date())
    const [data, setData] = useState('')
    const [none, setNone] = useState('none')
    const [habits, setHabits] = useState([])

    const { api, setHabitsToday } = useContext(UserContext)

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
            { headers: { Authorization: `Bearer ${api.token}` } })

        promise.then(response => setData(response.data))
        promise.catch(erro => alert(erro.response.data.details))
    }, [])

    useEffect(
        () => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
                { headers: { Authorization: `Bearer ${api.token}` } })
            promise.then(response => {
                setHabitsToday(response.data)
            })
            promise.catch(erro => alert(erro.response.data.details))
        }, [api.token, setHabitsToday]
    )

    function tileClassName({ date }) {
        if (data !== '') {
            let string = ''
            if (date.getDate().toString().length === 1) string += '0'
            string += date.getDate().toString()
            string += '/'
            let month = date.getMonth() + 1
            if (month.toString().length === 1) string += '0'
            string += month.toString()
            string += '/'
            string += date.getFullYear().toString()

            let classDate = ''

            if (date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
                return classDate = 'hoje'
            }

            data.map(i => {
                if (i.day === string) {
                    i.habits.map(j => {
                        if (!j.done) return classDate = 'red'
                        else classDate = 'green'
                    })
                }
            })
            return classDate

        }
    }

    function clickDay(value, e){
        if (data !== ''){
            let string = ''
            if (value.getDate().toString().length === 1) string += '0'
            string += value.getDate().toString()
            string += '/'
            let month = value.getMonth() + 1
            if (month.toString().length === 1) string += '0'
            string += month.toString()
            string += '/'
            string += value.getFullYear().toString()

            data.map(i => {
                if(i.day === string){
                    setHabits(i.habits)
                    setNone('')
                }
            })
        }
    }

    return (
        <>
            <Header />
            <Container>
                <div className="space" />
                <div>
                    <p>Histórico</p>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        calendarType='US'
                        tileClassName={tileClassName}
                        onClickDay={clickDay}
                    />
                </div>
                {habits.map(i => <Habits key={i.id} none={none} habits={i} />)}
                <div className="space" />
            </Container>
            <Footer />
        </>
    )
}

function Habits({none, habits}){

    return(
        <div className={none}>
            <h1>nome: {habits.name}</h1>
            <p>feito: {habits.done ? 'sim' : 'nao'}</p>
        </div>
    )
}