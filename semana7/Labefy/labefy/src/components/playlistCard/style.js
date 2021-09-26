import styled from "styled-components";

export const NameAndButtonContainer = styled.div`
    display: grid;
    width: 300px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 0px 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    border-radius: 15px;
    &:hover {
        background-color: #82956a;
    }
`

export const ButtonDetalhesEExcluir = styled.button`
    border-radius: 6px;
    background-color: #C59849;
    color: white;
    font-weight: bold;
    margin: 0px 10px;
`


export default { NameAndButtonContainer, ButtonDetalhesEExcluir };