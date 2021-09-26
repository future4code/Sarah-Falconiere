import styled from "styled-components";

export const PlaylistCreationContainer = styled.div`
    background-color: #9CB380;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 10px;
    height: 500px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    height: 200px;
    justify-content: space-around;
`

export const ButtonAdicionar = styled.button`
    background-color: #C59849;
    color: white;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    width: 70px;
    font-weight: bold;
`

export const InputNome = styled.input`
    width: 200px;
    border-radius: 10px;
    height: 20px;
`




export default { PlaylistCreationContainer, Form, ButtonAdicionar, InputNome };
