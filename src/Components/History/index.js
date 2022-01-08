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

            if (date.getMonth() === value.getMonth() && date.getDate() === value.getDate()) {
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

    return (
        <>
            <Header />
            <Container>
                <div className="space" />
                <div>
                    <p>Histórico</p>
                    <Calendar
                        activeStartDate={new Date(2022, 0, 5)}
                        onChange={onChange}
                        value={value}
                        calendarType='US'
                        tileClassName={tileClassName}
                    />
                </div>
                <div className="space" />
            </Container>
            <Footer />
        </>
    )
}