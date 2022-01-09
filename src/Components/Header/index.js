import Head from './style'
import { useContext } from 'react'
import UserContext from '../../context'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const { api } = useContext(UserContext)

    const navigate = useNavigate()

    return (
        <>
            <Head img={api.image}>
                <span>TrackIt</span>
                <div onClick={() => logout(navigate)}></div>
            </Head>
        </>
    )
}

function logout(navigate) {
    const question = window.confirm('Quer fazer logout?')
    if (question) {
        navigate('/')
        localStorage.removeItem('user')
    }
}