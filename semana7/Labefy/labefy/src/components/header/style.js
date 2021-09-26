import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #522A27;
`

export const HeaderTitle = styled.h1`
    color: white;
`

export const HeaderButton = styled.button`
    margin: 5px 20px;
    padding: 5px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #A6D49F;
`

export default { HeaderContainer, HeaderTitle, HeaderButton };
