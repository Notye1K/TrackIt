import styled from 'styled-components'

const Container = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 70px;
    background: #FFFFFF;
    padding-left: 36px;
    padding-right: 31px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    
    a{
        text-decoration: none;
        color: #52B6FF;
    }

    div{
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
    }
`

export default Container