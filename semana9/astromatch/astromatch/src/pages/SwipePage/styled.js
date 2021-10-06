import styled from "styled-components";

export const SwipeButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const SwipePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ImageContainer = styled.span`
    width: 350px;
    height: 400px;
    border: solid black 1px;
`

export const ProfilePicture = styled.img`
    /* max-width:100%; */
    box-shadow: 0px 0px 20px 20px #DBA632;
    max-height:100%;
    width: 100%;
    height: auto;
    display: inline-block;
    position: relative;
    border-radius: 15px;
    /* width: 100%;
    height: 70%;
    display: absolute; */
`

export const ProfileInformation = styled.span`
    width: 300px;
    position: absolute;
    top: 300px;
    right: 520px;
    font-size: 18px;
    color: white;
    text-shadow: 0px 0px 5px black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default { SwipeButtonContainer, ImageContainer, SwipePageContainer, ProfilePicture, ProfileInformation };