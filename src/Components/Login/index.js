import logo from '../Images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../GeneralStyles/styles'
import axios from 'axios'
import { useState } from 'react'
import Loader from "react-loader-spinner"

export default function Login() {
    //const navigate = useNavigate()

    const [loading, setLoading] = useState(0)
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    function handleSubmit(e) {
        e.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', form)
        setLoading(1)
        promise.then(response => {
            setLoading(0)
            console.log(response.data)
            // kleyton@tt.com 123
            //navigate('/')
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