import React from "react";
import axios from "axios";
import { PlaylistCreationContainer, Form, ButtonAdicionar, InputNome } from "./style";

export class PlaylistCreation extends React.Component {

    state = {
        playlistName: ''
    };

    changePlaylistNameToInput = (ev) => {
        this.setState({ playlistName: ev.target.value })
    }


    createPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
        const headers = {
            headers: {
                Authorization: 'sarah-romanhol-maryam'
            }
        };
        const body = {
            name: this.state.playlistName
        };

        this.setState({ playlistName: '' })

        axios.post(url, body, headers)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err)
            })
    };

    render() {
        return (
            <PlaylistCreationContainer>
                <Form>
                    <h2>Criar nova playlist</h2>
                    <label>Nome da playlist</label>
                    <InputNome value={this.state.playlistName} onChange={this.changePlaylistNameToInput} placeholder="Nome da playlist" type='text' />
                    <ButtonAdicionar type='submit' onClick={this.createPlaylist} >Criar</ButtonAdicionar>
                </Form>
            </PlaylistCreationContainer>
        )
    }

}

export default PlaylistCreation;