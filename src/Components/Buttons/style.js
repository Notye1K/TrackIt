import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 4px;
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.days.includes(props.id) || props.daysMarked.includes(parseInt(props.id)) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.days.includes(props.id) || props.daysMarked.includes(parseInt(props.id)) ? 'white' : '#DBDBDB'};
`
const obj = { Container, Button }

export default obj