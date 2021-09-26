import React from "react";
import { PlaylistDetailsContainer, TrackCreationForm, TurnBackButton, TurnBackButtonContainer } from "./style";

export class PlaylistDetails extends React.Component{
    state = {

    };




    render() {
        return (
        <PlaylistDetailsContainer>
            <TurnBackButtonContainer>
                <TurnBackButton onClick={() => this.props.changePage('playlistsList')}>Voltar</TurnBackButton>
            </TurnBackButtonContainer>
            
            <TrackCreationForm>
            <div>
                <label>Nome da música:</label>
                <input></input>
            </div>
            <div>
                <label>Artista</label>
                <input></input>
            </div>
            <div>
                <label>URL da música</label>
                <input></input>
            </div>
            <button type='submit'>Adicionar música</button>
            </TrackCreationForm>
            
        </PlaylistDetailsContainer>
    )
    }
    
}

export default PlaylistDetails;