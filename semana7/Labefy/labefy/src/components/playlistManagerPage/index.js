import React from "react";
import PlaylistsList from "../playlistsList";
import PlaylistDetails from "../playlistDetails";

export default class PlaylistManagerPage extends React.Component {
    state = {
        currentPage: "playlistsList"
    };


    changePage = (currentPage) => {
        this.setState({ currentPage: currentPage })
    }


    render() {

        const renderCurrentPage = () => {
            if(this.state.currentPage === 'playlistsList') {
                return <PlaylistsList changePage={this.changePage} />
            } else if(this.state.currentPage === 'playlistDetails') {
                return <PlaylistDetails changePage={this.changePage}/>
            }
        }

        return(
            <div>
                {renderCurrentPage()}
            </div>
        )
    }
}