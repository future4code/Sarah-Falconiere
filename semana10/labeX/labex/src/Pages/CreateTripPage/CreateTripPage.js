import { useHistory } from 'react-router-dom';
import { useForm, useProtectedPage } from '../../Hooks/hooks';
import url from '../../Constants/Constants';
import axios from 'axios';
import { CreateTripContainer,  FormContainer, ButtonTurnBack} from './styled'


const CreateTrip = (props) => {
    const history = useHistory()
    

    const goBack = () => {
        history.goBack()
    }

    const token = localStorage.getItem("token")

    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        duration: ''
    })

    useProtectedPage()

    const onSubmitForm = (e) => {
        e.preventDefault()

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration
        }

        axios
        .post(`${url}/trips`, body, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            cleanFields()
            // history.push('/viagens')
        })
        .catch((err) => window.alert('algo deu errado'))
    }


    return (
        <CreateTripContainer>
            <FormContainer onSubmit={onSubmitForm}>
            <input
            placeholder='Nome'
            name={'name'}
            value={form.name}
            onChange={onChange}
            required
            />
            <input 
            placeholder='Planeta, satélite ou outro corpo celeste'
            name={'planet'}
            value={form.planet}
            onChange={onChange}
            required 
            />
            <input
            placeholder='Data'
            name={'date'}
            value={form.date}
            onChange={onChange}
            type='date'
            required 
            />
            <input 
            placeholder='Duração em dias'
            name={'duration'}
            value={form.duration}
            onChange={onChange}
            required 
            />
            <input 
            placeholder='Descrição da viagem'
            name={'description'}
            value={form.description}
            onChange={onChange}
            required 
            />
            <input type='submit' value='Criar'/>
            </FormContainer>
            <ButtonTurnBack onClick={goBack}>Voltar</ButtonTurnBack>
        </CreateTripContainer>
    )
}

export default CreateTrip;