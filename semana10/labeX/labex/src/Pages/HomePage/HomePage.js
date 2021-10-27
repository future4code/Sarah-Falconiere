import { useHistory } from 'react-router-dom';
import { HomePageContainer, HomeButton } from './styled'


function HomePage (props) {
    const history = useHistory();

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    return(
        <HomePageContainer>
            <p>HomePage</p>
            <HomeButton onClick={goToListTripsPage}>Ir para viagens</HomeButton>
            <HomeButton onClick={goToAdminHomePage}>Ir para admin home</HomeButton>
        </HomePageContainer>
    )
}

export default HomePage;