import Container from '../GeneralStyles/styles'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'


export default function Register(){
    return (
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input type="text" placeholder='nome' />
                <input type="text" placeholder='foto' />
                <button type="submit"> Entrar </button>
            </form>
            <Link to='/'>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}

function handleSubmit(e) {
    e.preventDefault()
    console.log('pa')
}