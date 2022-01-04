import logo from '../../Images/logo.svg'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
    return(
        <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <button type="submit"> Entrar </button>
            </form>
            <Link to='/'>
                <span> Não tem uma conta? Cadastre-se! </span>
            </Link>
        </Container>
    )
}

function handleSubmit(e){
    e.preventDefault()
    console.log('pa')
}

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        margin-top: 32.62px;
        margin-bottom: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
    }
`