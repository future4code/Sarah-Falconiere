import React from "react";
import { HeaderContainer, HeaderTitle, HeaderButton } from "./style";

export const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderTitle>Labefy</HeaderTitle>
            <span>
                <HeaderButton onClick={() => props.changePage("playlistCreation")}>Cadastrar Playlist</HeaderButton>
                <HeaderButton onClick={() => props.changePage("playlistManagerPage")}>Gerenciar Playlists</HeaderButton>
                {/* <HeaderButton onClick={() => props.changePage("playlistDetails")}>Adicionar Música</HeaderButton> */}
            </span>
        </HeaderContainer>
    )
}

export default Header;