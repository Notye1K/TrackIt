import Header from '../Header'
import MyHabits from '../MyHabits'
import Footer from '../Footer'
import Container from './style'
import {useState} from 'react'
import Loader from "react-loader-spinner"
import Buttons from '../Buttons'
import Habit from '../Habit'


export default function Habits(){

    const [plus, setPlus] = useState('none')
    const [loading, setLoading] = useState(0)
    const [input, setInput] = useState('')

    return (
        <>
            <Header />
            <Container loading={loading}>
                <div className='space' />
                <MyHabits setPlus={setPlus}/>
                <main>
                    <div className={`create ${plus}`}>
                        <input type="text" placeholder='nome do hábito' value={input}
                        disabled={loading === 1 && true}
                        onChange={e => setInput(e.target.value)} />
                       <Buttons state={true}/>
                        <div className='cancelOrSave'>
                            <button className='cancel'
                            onClick={() => setPlus('none')}>Cancelar</button>
                            <button className='save' disabled={loading === 1 && true}>
                                {loading === 1 ? <Loader type="ThreeDots" color="white" height={35} width={70} /> : 'Salvar'}
                            </button>
                        </div>
                    </div>
                    <div className="habits">
                        <Habit />
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