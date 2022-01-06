import Container from './style'

export default function MyHabits({ setPlus }) {
    return (
        <Container>
            <h1>Meus hábitos</h1>
            <button onClick={() => setPlus('')}>+</button>
        </Container>
    )
}