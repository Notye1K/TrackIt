import obj from "./style"

export default function Buttons({ state, days, daysMarked, click }) {
    const { Container, Button } = obj

    if (days === undefined) {
        days = []
    }

    if (daysMarked === undefined) {
        daysMarked = []
    }

    return (
        <Container>
            <Button id='0' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>D</Button>
            <Button id='1' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>S</Button>
            <Button id='2' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>T</Button>
            <Button id='3' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>Q</Button>
            <Button id='4' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>Q</Button>
            <Button id='5' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>S</Button>
            <Button id='6' days={days} daysMarked={daysMarked} disabled={state ? false : true} onClick={click}>S</Button>
        </Container>
    )
}