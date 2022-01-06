import obj from "./style"
import { useState} from 'react'

export default function Buttons( {state} ){
    const {Container, Button} = obj

    const [days, setDays] = useState([])

    function handleDays(e) {
        const id = e.target.id
        if (days.includes(id)) {
            setDays(days.filter(i => i !== id))
        }
        else {
            setDays([...days, id])
        }
    }

    return(
        <Container>
            <Button id='0' days={days} disabled={state ? false : true} onClick={handleDays}>D</Button>
            <Button id='1' days={days} disabled={state ? false : true} onClick={handleDays}>S</Button>
            <Button id='2' days={days} disabled={state ? false : true} onClick={handleDays}>T</Button>
            <Button id='3' days={days} disabled={state ? false : true} onClick={handleDays}>Q</Button>
            <Button id='4' days={days} disabled={state ? false : true} onClick={handleDays}>Q</Button>
            <Button id='5' days={days} disabled={state ? false : true} onClick={handleDays}>S</Button>
            <Button id='6' days={days} disabled={state ? false : true} onClick={handleDays}>S</Button>
        </Container>
    )
}