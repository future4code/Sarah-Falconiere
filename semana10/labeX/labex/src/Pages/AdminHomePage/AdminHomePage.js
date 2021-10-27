import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetTrip, useProtectedPage } from "../../Hooks/hooks";
import url from '../../Constants/Constants';
import { AdminHomePageContainer, TitlePage, ButtonsContainer, TripNameContainer } from './styled'

function AdminHome(props) {

    const token = localStorage.getItem("token")
    const [tripsList, getTrips] = useGetTrip()

    useProtectedPage()

    useEffect(() => {
        getTrips()
    }, [tripsList.length])

    //integrações API
    const deleteTrip = (id) => {
        axios
            .delete(`${url}/trips/${id}`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                console.log(res)
                getTrips()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const Logout = () => {
        localStorage.clear()
        history.push("/login")
    }

    //routes
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.goBack()
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    //mostrando lista de viagens na tela
    const showTripsList = tripsList.map((trip) => {
        return (
            <TripNameContainer key={trip.id}>
                <p onClick={() => goToTripDetailsPage(trip.id)}>{trip.name}</p>
                <button onClick={() => deleteTrip(trip.id)}>Excluir</button>
            </TripNameContainer>
        )
    })

    return (
        <AdminHomePageContainer>
            <TitlePage>Painel administrativo</TitlePage>
            <ButtonsContainer>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
                <button onClick={Logout}>Logout</button>
            </ButtonsContainer>
            {showTripsList}
        </AdminHomePageContainer>
    )
}

export default AdminHome;