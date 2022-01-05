import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;

    form{
        margin-top: 32.62px;
        margin-bottom: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;

        input{
            width: 303px;
            height: 45px;
            padding-left: 11px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            background: ${props => props.loading===1 ? '#F2F2F2' : 'white'};
            
            font-size: 19.976px;
            line-height: 25px;

            ::placeholder{
                color: #DBDBDB;
            }
        }

        button{
            width: 303px;
            height: 45px;

            background: #52B6FF;
            border: none;
            border-radius: 4.63636px;

            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;

            opacity: ${props => props.loading===1 ? '0.7' : "1"};
        }
    }

    a{
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`
export default Container