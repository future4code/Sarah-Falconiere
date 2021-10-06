import axios from "axios";
import React, { useEffect, useState } from "react";
import {MatchedPersonContainer, LittlePhotoProfile} from './styled';

function MatchesPage () {

    const [matchesList, setMatchesList] = useState([]);


    useEffect(()=> {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah-romanhol-maryam/matches')
        .then((res) => {
            console.log(res.data.matches)
            setMatchesList(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const matches = matchesList.map((person) => {
        return(
            <MatchedPersonContainer>
                <LittlePhotoProfile src={person.photo} />
                <p>{person.name}</p>
            </MatchedPersonContainer>
        )
    })


    return(
        <div>
            {matches}
        </div>
    )
}

export default MatchesPage;