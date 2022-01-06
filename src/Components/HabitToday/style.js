import styled from "styled-components"

const Container = styled.div `
    height: 94px;
    background: #FFFFFF;
    padding: 13px 13px 12px 15px;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;

    h1{
        margin-bottom: 7px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: #666666;
        font-size: 19.976px;
        line-height: 25px;
    }

    p.inf{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }

    .status{
        width: 69px;
        height: 69px;
        background: #8FC549;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default Container