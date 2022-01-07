import styled from "styled-components"

const Container = styled.div`
    min-height: 100vh;
    background: #F2F2F2;
    
    .space{
        height: 70px;
    }

    main{
        padding-left: 17px;
        padding-right: 18px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: normal;

        .none{
            display: none;
        }

        .create{
            height: 180px;
            background: #FFFFFF;
            padding: 18px;
            border-radius: 5px;
            margin-bottom: 29px;

            input{
                width: 303px;
                height: 45px;
                background: ${props => props.loading === 1 ? '#F2F2F2' : 'white'};
                padding-left: 11px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                margin-bottom: 10px;

                font-family: 'Lexend Deca', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 19.976px;
                line-height: 25px;  

                ::placeholder{
                    color: #DBDBDB;
                }
            }

            .cancelOrSave{
                margin-top: 36px;

                display: flex;
                justify-content: flex-end;
                
                .cancel{
                    background: white;
                    border: none;

                    font-family: 'Lexend Deca', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15.976px;
                    line-height: 20px;
                    text-align: center;
                    color: #52B6FF;
                }

                .save{
                    width: 84px;
                    height: 35px;
                    background: #52B6FF;
                    border: none;
                    border-radius: 4.63636px;
                    opacity: ${props => props.loading === 1 ? '0.7' : "1"};

                    font-family: 'Lexend Deca', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15.976px;
                    line-height: 20px;
                    text-align: center;
                    color: #FFFFFF;
                }
            }
        }
        
        span{
            font-size: 17.976px;
            line-height: 22px;
            color: #666666; 
        }

        .habits{
            margin-bottom: 50px;

            display:flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`

export default Container