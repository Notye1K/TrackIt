import Container from "./style"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useContext } from 'react'
import UserContext from '../../context'

export default function Footer() {

    const { habitsToday, counter } = useContext(UserContext)

    return (
        <Container>
            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'>
                <div>
                    <CircularProgressbar background={true} value={counter} maxValue={habitsToday.length} text='Hoje'
                        backgroundPadding='6'
                        styles={buildStyles({
                            textSize: '17.976px',
                            backgroundColor: '#52B6FF',
                            pathColor: '#ffffff',
                            trailColor: '#52B6FF',
                            textColor: '#ffffff',
                        })} />
                </div>
            </Link>
            <Link to='/historico'>Histórico</Link>
        </Container>
    )
}