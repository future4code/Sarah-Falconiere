import React from "react";
import axios from "axios";
import { PlaylistsListContainer, NameAndButtonContainer, ButtonDetalhesEExcluir } from "./style";
import PlaylistDetails from "../playlistDetails";
import PlaylistCard from "../playlistCard";

export class PlaylistsList extends React.Component {
    state = {
        playlists: [],
    }

    componentDidMount = () => {
        this.getPlaylists()
    }



    getPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
        const headers = {
            headers: {
                Authorization: 'sarah-romanhol-maryam'
            }
        };


        axios.get(url, headers)
            .then((res) => {
                console.log(res.data);
                this.setState({ playlists: res.data.result.list })
                console.log(this.state.playlists)

            })
            .catch((err) => {
                alert(err.response)
            })

    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
        const headers = {
            headers: {
                Authorization: 'sarah-romanhol-maryam'
            }
        };


        axios.delete(url, headers)
            .then((res) => {
                console.log(res);
                this.getPlaylists()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        

        const playlistsLists = this.state.playlists.map((playlist) => {
            return <PlaylistCard 
                changePage={this.props.changePage}
                name={playlist.name}
                key={playlist.id}
                id={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        });

        return (
            <PlaylistsListContainer>
                {playlistsLists}
            </PlaylistsListContainer>
        )
    }

}

export default PlaylistsList;