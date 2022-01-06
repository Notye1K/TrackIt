import Header from '../Header'
import MyHabits from '../MyHabits'
import Footer from '../Footer'
import styles from './style'
import {useState} from 'react'
import Loader from "react-loader-spinner"


export default function Habit(){
    const [Container, Button] = styles

    const [plus, setPlus] = useState('none')
    const [days, setDays] = useState([])
    const [loading, setLoading] = useState(0)
    const [input, setInput] = useState('')


    function handleDays(e){
        const id = e.target.id
        if(days.includes(id)){
            setDays(days.filter(i => i !== id))
        }
        else{
            setDays([...days, id])
        }
    }

    return (
        <>
            <Header />
            <Container loading={loading}>
                <div className='space'/>
                <MyHabits setPlus={setPlus}/>
                <main>
                    <div className={`create ${plus}`}>
                        <input type="text" placeholder='nome do hábito' value={input}
                        disabled={loading === 1 && true}
                        onChange={e => setInput(e.target.value)} />
                        <div className='days'>
                            <Button id='0' days={days} onClick={handleDays}>D</Button>
                            <Button id='1' days={days} onClick={handleDays}>S</Button>
                            <Button id='2' days={days} onClick={handleDays}>T</Button>
                            <Button id='3' days={days} onClick={handleDays}>Q</Button>
                            <Button id='4' days={days} onClick={handleDays}>Q</Button>
                            <Button id='5' days={days} onClick={handleDays}>S</Button>
                            <Button id='6' days={days} onClick={handleDays}>S</Button>
                            {console.log(days)}
                        </div>
                        <div className='cancelOrSave'>
                            <button className='cancel'
                            onClick={() => setPlus('none')}>Cancelar</button>
                            <button className='save' disabled={loading === 1 && true}>
                                {loading === 1 ? <Loader type="ThreeDots" color="white" height={35} width={70} /> : 'Salvar'}
                            </button>
                        </div>
                    </div>
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
                </main>
            </Container>
            <Footer />
        </>
    )
}