import styled from "styled-components";

export const MatchedPersonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    border: solid black 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const LittlePhotoProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius:  50%;
`

export default {MatchedPersonContainer, LittlePhotoProfile};