import React from "react";
import { NameAndButtonContainer, ButtonDetalhesEExcluir } from "./style"



const PlaylistCard = (props) => {
    return (
        <NameAndButtonContainer>
            <p>{props.name}</p>
            <ButtonDetalhesEExcluir onClick={() => props.changePage('playlistDetails')}>Detalhes</ButtonDetalhesEExcluir>
            <ButtonDetalhesEExcluir onClick={() => props.deletePlaylist(props.id)} >Excluir</ButtonDetalhesEExcluir >
        </NameAndButtonContainer>
    )
}

export default PlaylistCard;

