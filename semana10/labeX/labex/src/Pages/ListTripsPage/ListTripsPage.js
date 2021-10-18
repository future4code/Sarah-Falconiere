import { useHistory } from 'react-router-dom';
import { useGetTrip } from "../../Hooks/hooks";
import { ListTripsContainer, ButtonsContainer, PageContainer, ButtonsListTrips, TripContainer } from './styled'

export const ListTrips = (props) => {

    //routes
    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    const goBack = () => {
        history.goBack()
    }

    const [tripsList] = useGetTrip()

    const showTripsList = tripsList.map((trip) => {
        return (
            <TripContainer key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data:{trip.date}</p>
            </TripContainer>
        )
    })


    return (
        <PageContainer>
            <ListTripsContainer>
                {showTripsList}
            </ListTripsContainer>
            <ButtonsContainer>
                <ButtonsListTrips onClick={goBack}>Voltar</ButtonsListTrips>
                <ButtonsListTrips onClick={goToApplicationFormPage}>Inscrever-se</ButtonsListTrips>
            </ButtonsContainer>
        </PageContainer>

    )
}

export default ListTrips;