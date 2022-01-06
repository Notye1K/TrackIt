import Container from "./style"
import Buttons from '../Buttons'
import del from '../Images/del.svg'

export default function Habit(){
    return (
        <Container>
            <div className='title'>
                <span>Ler 1 capítulo de livro</span>
                <img src={del} alt="delete" />
            </div>
            <Buttons /> 
        </Container>
    )
}