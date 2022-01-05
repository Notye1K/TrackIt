import styled from 'styled-components'

const Header = styled.header`
    position: fixed;
    left: 0px;
    top: 0px;

    width: 100%;
    height: 70px;
    padding-left: 18px;
    padding-right: 10px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-family: 'Playball';
    font-style: normal;
    font-weight: normal;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        width: 51px;
        height: 51px;

        /* background: url(image.png); */
        background-color: purple;
        border-radius: 98.5px;  
    }
`

export default Header