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

    .none{
        display: none;
        h1{
            color: red;
        }
    }
`

export default Container