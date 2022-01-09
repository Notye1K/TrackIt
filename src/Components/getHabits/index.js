import axios from "axios"

export default function getHabits(setHabitsToday, api){
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
        { headers: { Authorization: `Bearer ${api.token}` } })
    promise.then(response => {
        setHabitsToday(response.data)
    })
    promise.catch(erro => alert(erro.response.data.details))
}