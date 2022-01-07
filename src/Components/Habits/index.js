import Header from '../Header'
import MyHabits from '../MyHabits'
import Footer from '../Footer'
import Container from './style'
import { useState, useContext, useEffect } from 'react'
import Loader from "react-loader-spinner"
import Buttons from '../Buttons'
import Habit from '../Habit'
import UserContext from '../../context'
import axios from 'axios'


export default function Habits() {

    const [plus, setPlus] = useState('none')
    const [loading, setLoading] = useState(0)
    const [input, setInput] = useState('')
    const [days, setDays] = useState([])
    const [success, setSuccess] = useState(true)

    const { api, setHabitsToday } = useContext(UserContext)

    const [habits, setHabits] = useState([])

    useEffect(
        () => {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
                { headers: { Authorization: `Bearer ${api.token}` } })
            promise.then(response => {
                setHabits(response.data)
            })
            promise.catch(erro => alert(erro.response.data.details))
        }, [success, api.token]
    )

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

    function handleSave() {
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            { name: input, days },
            { headers: { Authorization: `Bearer ${api.token}` } })
        setLoading(1)
        promise.then(() => {
            setPlus('none')
            setInput('')
            setDays([])
            setSuccess(!success)
            setLoading(0)
        })
        promise.catch(erro => {
            alert(erro.response.data.details)
            setLoading(0)
        })
    }

    function handleDays(e) {
        const id = e.target.id
        if (days.includes(id)) {
            setDays(days.filter(i => i !== id))
        }
        else {
            setDays([...days, id])
        }
    }

    return (
        <>
            <Header />
            <Container loading={loading}>
                <div className='space' />
                <MyHabits setPlus={setPlus} />
                <main>
                    <div className={`create ${plus}`}>
                        <input type="text" placeholder='nome do hábito' value={input}
                            disabled={loading === 1 && true}
                            onChange={e => setInput(e.target.value)} />
                        <Buttons state={true} days={days} click={handleDays} />
                        <div className='cancelOrSave'>
                            <button className='cancel'
                                onClick={() => setPlus('none')}>Cancelar</button>
                            <button className='save' disabled={loading === 1 && true} onClick={handleSave}>
                                {loading === 1 ? <Loader type="ThreeDots" color="white" height={35} width={70} /> : 'Salvar'}
                            </button>
                        </div>
                    </div>
                    <div className="habits">
                        {habits.map(i => <Habit key={i.id} refresh={{ success, setSuccess }} id={i.id} name={i.name} days={i.days} />)}
                    </div>
                    <span>
                        {habits.length === 0 && 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'}
                    </span>
                </main>
                <div className='space' />
            </Container>
            <Footer />
        </>
    )
}