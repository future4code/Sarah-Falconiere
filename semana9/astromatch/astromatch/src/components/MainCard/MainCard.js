import React, { useState, useEffect } from "react";
import { CardContainer, HeaderContainer, ButtonsHeaderContainer, ButtonHeader } from "./styled";
import SwipePage from "../../pages/SwipePage/SwipePage";
import MatchesPage from '../../pages/MatchesPage/MatchesPage'
import logo from '../../assets/logo.png';

const MainCard = (props) => {
    const [currentPage, setCurrentPage] = useState('swipePage')

    const changePage = (event) => {
        setCurrentPage(event.target.value)
    }

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'matchesPage':
                return <MatchesPage />
            case 'swipePage':
                return <SwipePage />        
            default:
                return <SwipePage />
        }
    }

    return (
        <CardContainer>
            <div>
                <HeaderContainer>
                    <img src={logo} alt='logo astromatch' />
                    <ButtonsHeaderContainer>
                        <ButtonHeader value='swipePage' onClick={changePage}>⁉</ButtonHeader>
                        <button value='matchesPage' onClick={changePage}>👁‍🗨</button>
                    </ButtonsHeaderContainer>
                </HeaderContainer>
                <hr />
                {renderCurrentPage()}
                {/*criar ternário que, ora renderiza swipes, ora a lista de matches*/}
                {/* <SwipePage /> */}
                {/* <MatchesPage /> */}
            </div>
        </CardContainer>
    )
}

export default MainCard;