import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputsContainer, LoginPageContainer, SignUpContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from "react-router";
import { goToSignup } from "../../routes/coordinator";
import { LoginForm } from "./LoginForm";
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

export const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <LoginPageContainer>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color="primary"
                    margin={"normal"}
                    onClick={() => goToSignup(history)}
                >
                    Cadastre-se
                </Button>
            </SignUpContainer>

        </LoginPageContainer>

    )
}

