import logo from '../Images/logo.svg'
import {Link} from 'react-router-dom'
import Container from '../GeneralStyles/styles'

export default function Login() {
    return(
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <button type="submit"> Entrar </button>
            </form>
            <Link to='/cadastro'>
                <span> Não tem uma conta? Cadastre-se! </span>
            </Link>
        </Container>
    )
}

function handleSubmit(e){
    e.preventDefault()
    console.log('pa')
}