import Container from "./style"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Footer() {
    const percentage = 66
    return (
        <Container>
            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'>
                <div>
                    <CircularProgressbar background={true} value={percentage} text='Hoje'
                        backgroundPadding='6'
                        styles={buildStyles({
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