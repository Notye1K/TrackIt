import Container from "./style"
import Buttons from '../Buttons'
import del from '../Images/del.svg'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../../context'

export default function Habit({ name, days, id, refresh }) {
    const { api } = useContext(UserContext)

    const { setSuccess, success } = refresh

    function handleDelete() {
        if (window.confirm('Quer mesmo excluir?')) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                { headers: { Authorization: `Bearer ${api.token}` } })
            promise.then(() => {
                setSuccess(!success)
            })
            promise.catch(erro => alert(erro.response.data.details))
        }
    }

    return (
        <Container>
            <div className='title'>
                <span>{name}</span>
                <img src={del} alt="delete" onClick={handleDelete} />
            </div>
            <Buttons daysMarked={days} />
        </Container>
    )
}