import Container from "./style"
import check from '../Images/check.svg'

export default function HabitToday(props){
    function handleStatus(){
        props.click(props.id, props.done)
    }
    return (
        <Container done={props.done}>
            <div className="info">
                <h1>{props.name}</h1>
                <p className='inf'>Sequência atual: <span className='day'>{props.sequence}
                    {props.sequence === 1 || props.sequence === 0 ? ' dia' : ' dias'}</span></p>
                <p className='inf'>Seu recorde: <span className={props.sequence === props.record && 'day'}>{props.record}
                    {props.record === 1 || props.record === 0 ? ' dia' : ' dias'}</span></p>
            </div>
            <div className="status" onClick={handleStatus}>
                <img src={check} alt="check" />
            </div>
        </Container>
    )
}