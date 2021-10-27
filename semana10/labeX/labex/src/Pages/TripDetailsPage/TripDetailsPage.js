import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useProtectedPage } from "../../Hooks/hooks";
import url from "../../Constants/Constants";
import {TripDetailPageContainer, TripDetailsContainer, CandidatesToApprovedContainer} from './styled'

const TripDetails = (props) => {
    const params = useParams()
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])


    useProtectedPage()
    

    useEffect(() => {
        getTripDetails()
    }, [])

    const getTripDetails = () => {
        axios
            .get(`${url}/trip/${params.id}`, {
                headers: {
                    auth: token
                }
            })
            .then(res => {
                console.log(res)
                setTrip(res.data.trip)
                setCandidates(res.data.trip.candidates)
                setApproved(res.data.trip.approved)
            })
            .catch(err => console.log(err))
    }
    

    const decideCandidate = (id, answer) => {
        const body = {
            approve: answer
        }
        const headers = {headers: {
            auth: token
        }}

        axios
        .put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, headers)
        .then(res => {
            console.log(res)
            getTripDetails()
        })
        .catch(err => console.log(err.response))
    }

    const goBack = () => {
        history.goBack()
    }

    const { name, description, planet, durationInDays, date } = trip

    return (
        <TripDetailPageContainer>
            <TripDetailsContainer>
                <p>Nome: {name}</p>
                <p>Descrição: {description}</p>
                <p>Planeta: {planet}</p>
                <p>Duração: {durationInDays} dias</p>
                <p>Data: {date}</p>
            </TripDetailsContainer>
            <button onClick={goBack}>Voltar</button>
            <div>
                <h2>Candidatos pendentes</h2>
                {candidates.map((candidate) => {
                    return (
                        <CandidatesToApprovedContainer key={candidate.id}>
                            <p>Nome: {candidate.name}</p>
                            <p>Profissão: {candidate.profession}</p>
                            <p>Idade: {candidate.age}</p>
                            <p>País: {candidate.country}</p>
                            <p>{candidate.applicationText}</p>
                            <button onClick={() => decideCandidate(candidate.id, 'true')}>Aprovar</button>
                            <button onClick={() => decideCandidate(candidate.id, 'false')}>Reprovar</button>
                        </CandidatesToApprovedContainer>
                    )
                })}
            </div>
            <div>
                <h2>Candidatos aprovados</h2>
                {approved.map((candidate) => {
                    return (
                        <ul>
                            <li key={candidate.id}>{candidate.name}</li>
                        </ul>
                    )
                })}
            </div>


        </TripDetailPageContainer>
    )
}

export default TripDetails;