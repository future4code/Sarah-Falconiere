import styled from "styled-components";

export const CardContainer = styled.div`
    border: solid black 1px;
    height: 580px;
    width: 400px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
`

export const ButtonsHeaderContainer = styled.span`
    display: flex;
    justify-content: space-around;
`

export const ButtonHeader = styled.button`
    margin-right: 10px;
`
export default {CardContainer, HeaderContainer, ButtonsHeaderContainer, ButtonHeader};