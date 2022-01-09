import styled from "styled-components"

const Container = styled.div`
    min-height: 100vh;
    background: #F2F2F2;

    display: flex;
    flex-direction: column;
    align-items: center;

    .space{
        height: 70px;
    }

    .margin{
        margin-bottom: 50px;
    }

    p{
        margin-top: 28px;
        margin-bottom: 11px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    .react-calendar{
        border: none;
        border-radius: 10px;
    }
    .green{
        background: green;
    }
    .red{
        background: red;
    }
    .hoje{
        background: #ffff76;
        color: black;
    }

    .history{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 15px;
        color: #126BA5;

        h1{
            margin-top: 15px;
        }
        h2{
            margin-top: 5px;
        }
        span{
            color: #666666;

        }
    }

    .none{
        display: none;
    }
`

export default Container