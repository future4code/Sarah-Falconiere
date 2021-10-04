import styled from "styled-components";

export const PlaylistDetailsContainer = styled.div`
    background-color: #9CB380;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    padding-top: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const TrackCreationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`

export const TurnBackButton = styled.button`
    border-radius: 10px;
    background-color: #522A27;
    color: white;
    font-weight: bold;
    height: 30px;
    width: 80px;
`

export const TurnBackButtonContainer = styled.span`
    display: flex;
    flex-grow: 0;
`


export default { PlaylistDetailsContainer, TrackCreationForm, TurnBackButton, TurnBackButtonContainer };
