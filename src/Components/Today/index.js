import Footer from "../Footer"
import HabitToday from "../HabitToday"
import Header from "../Header"
import Container from './style'

export default function Today() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    let week = date.getDay()
    week = handleWeek(week)

    return (
        <>
            <Header />
            <Container>
                <div className='space' />
                <h1 className='day'>{week}, {day}/{month}</h1>
                <p>Nenhum hábito concluído ainda</p>
                <div className="habits">
                    <HabitToday />
                </div>
            </Container>
            <Footer />
        </>
    )
}

function handleWeek(week){
    if (week === 0) {
        week = 'Domingo'
    } else if (week === 1) {
        week = 'Segunda'
    } else if (week === 2) {
        week = 'Terça'
    } else if (week === 3) {
        week = 'Quarta'
    } else if (week === 4) {
        week = 'Quinta'
    } else if (week === 5) {
        week = 'Sexta'
    } else if (week === 6) {
        week = 'Sabado'
    }
    return week
}