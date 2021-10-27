import axios from "axios";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import url from "../../Constants/Constants";
import { LoginPageContainer, ButtonsContainer } from './styled'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const LoginFunction = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(`${url}/login`, body)
        .then((res) => {
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            history.push("/admin/trips/list")
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    //routes
    const history = useHistory();

    // const goToAdminHomePage = () => {
    //     history.push("/admin/trips/list")
    // }

    const goBack = () => {
        history.goBack()
    }

    return (
        <LoginPageContainer>
            <input value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input value={password} placeholder='senha' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <ButtonsContainer>
                <button onClick={goBack}>Voltar</button>
                <button onClick={LoginFunction}>Entrar</button>
            </ButtonsContainer>
        </LoginPageContainer>
    )
}

export default Login;