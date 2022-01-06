import Container from "./style"
import check from '../Images/check.svg'

export default function HabitToday(){
    return (
        <Container>
            <div className="info">
                <h1>Ler 1 capítulo de livro</h1>
                <p className='inf'>Sequência atual: <span>4 dias</span></p>
                <p className='inf'>Seu recorde: <span>5 dias</span></p>
            </div>
            <div className="status">
                <img src={check} alt="check" />
            </div>
        </Container>
    )
}