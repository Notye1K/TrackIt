import styled from "styled-components"

const Container = styled.div `
    height: 91px;
    background: #FFFFFF;
    padding: 13px 10px 15px 14px;
    border-radius: 5px;

    .title{
        margin-bottom: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }
    }
`

export default Container