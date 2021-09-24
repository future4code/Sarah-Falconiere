import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    playlists: [],
    playlistNameInput: '',
    playlistChosen: {},
    playlistChosenTracks: [],
    playlistChosenId: '',
    playlistChosenName: '',
    music: '',
    artist: '',
    urlMusic: ''
  };

  componentDidMount() {
    this.getPlaylists()
  };

  changePlaylistName = (ev) => {
    this.setState({ playlistName: ev.target.value })
  };

  changeMusicName = (ev) => {
    this.setState({ music: ev.target.value })
  };

  changeArtistName = (ev) => {
    this.setState({ artist: ev.target.value })
  };

  changeUrl = (ev) => {
    this.setState({ urlMusic: ev.target.value })
  };

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
        this.getPlaylists()

      })
      .catch((err) => {
        console.log(err.response.data)
      })
  };


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
        console.log(err.response.data)
      })
  }




  getPlaylistTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers: {
        Authorization: 'sarah-romanhol-maryam'
      }
    };

    this.setState({ playlistChosenId: id })
    axios.get(url, headers)
      .then((res) => {
        console.log(res.data.result);
        this.setState({ playlistChosen: res.data.result })
        this.setState({ playlistChosenTracks: res.data.result.tracks })
      })
      .catch((err) => {
        console.log(err)
      })


  };

  showMusicDetails = (array) => {
    console.log(array)


    for (let item of array) {
      return (
        <div>
          <p>Nome: {item.name}, artista: {item.artist}</p>
        </div>


      )
    }
  };



  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers: {
        Authorization: 'sarah-romanhol-maryam'
      }
    };
    const body = {
      name: this.state.music,
      artist: this.state.artist,
      url: this.state.urlMusic
    }
    this.setState({ music: '' });
    this.setState({ artist: '' });
    this.setState({ urlMusic: '' });

    axios.post(url, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })
  };




  render() {

    const playlistsLists = this.state.playlists.map((playlist) => {
      return (
        <div>
          <p key={playlist.id} onClick={() => this.getPlaylistTracks(playlist.id)}>{playlist.name}</p>
          <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        </div>
      )
    })

    console.log('trackssss: ', this.state.playlistChosenTracks)

    return (
      <div>
        <label>Escreva o nome da playlist</label>
        <input required value={this.state.playlistName} type='name' onChange={this.changePlaylistName} />
        <button onClick={this.createPlaylist}>Adicionar</button>
        {playlistsLists}
        <span>
          <p>Adicione músicas a essa playlist</p>
          <label>Insira o nome da música</label>
          <input require onChange={this.changeMusicName} value={this.state.music} placeholder="Nome da música"></input>

          <label>Insira o artista</label>
          <input require onChange={this.changeArtistName} value={this.state.artist} placeholder="Artista"></input>

          <label>Insira o link da música</label>
          <input require onChange={this.changeUrl} value={this.state.urlMusic} placeholder="link"></input>

          <button onClick={() => { this.addTrackToPlaylist(this.state.playlistChosenId) }}>Adicionar</button>

          <p>Quantidade: {this.state.playlistChosen.quantity}</p>
          {this.showMusicDetails(this.state.playlistChosenTracks)}


        </span>
      </div>
    )
  }
}

export default App;
