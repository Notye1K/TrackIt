import logo from '../Images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../GeneralStyles/styles'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import Loader from "react-loader-spinner"
import UserContext from '../../context'

export default function Login() {
    const navigate = useNavigate()

    const { setApi } = useContext(UserContext)

    const [loading, setLoading] = useState(0)
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/hoje')
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', form)
        setLoading(1)
        promise.then(response => {
            setLoading(0)
            setApi(response.data)
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/hoje')
        })
        promise.catch(erro => {
            setLoading(0)
            alert(erro.response.data.details)
        })
    }

    return (
        <Container loading={loading}>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input type="email" required placeholder='email' value={form.email}
                    disabled={loading === 1 && true}
                    onChange={e => setForm({ ...form, email: e.target.value })} />

                <input type="password" required placeholder='senha' value={form.password}
                    disabled={loading === 1 && true}
                    onChange={e => setForm({ ...form, password: e.target.value })} />

                <button type="submit" disabled={loading === 1 && true}>
                    {loading === 1 ? <Loader type="ThreeDots" color="white" height={45} width={80} /> : 'Entrar'}
                </button>
            </form>
            <Link to='/cadastro'>
                <span> Não tem uma conta? Cadastre-se! </span>
            </Link>
        </Container>
    )
}