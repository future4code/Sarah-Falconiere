import { useHistory } from "react-router";
import React from "react";
import { HeaderContainer, Buttons, LogoHeader } from "./styled";

const Header = (props) => {

    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }


    return (
        <HeaderContainer>
            <LogoHeader onClick={goToHomePage}>LabeX</LogoHeader>
            <Buttons onClick={goToListTripsPage}>Ver Viagens</Buttons>
            <Buttons onClick={goToAdminHomePage}>Área do admin</Buttons>
        </HeaderContainer>
    )
}

export default Header;