import styled from "styled-components"

const Container = styled.div `
    min-height: 100vh;
    background: #F2F2F2;
    padding-left: 17px;
    padding-right: 18px;

    .space{
        height: 70px;
    }

    h1.day{
        margin-top: 28px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }

    .habits{
            margin-top: 28px;
            margin-bottom: 100px;

            display:flex;
            flex-direction: column;
            gap: 10px;
        }
`

export default Container