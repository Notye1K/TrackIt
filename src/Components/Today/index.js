import Footer from "../Footer"
import HabitToday from "../HabitToday"
import Header from "../Header"
import Container from './style'

export default function Today() {
    return (
        <>
            <Header />
            <Container>
                <div className='space' />
                <h1 className='day'>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>
                <div className="habits">
                    <HabitToday />
                </div>
            </Container>
            <Footer />
        </>
    )
}