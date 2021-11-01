import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { login } from "../../services/access";
import { useHistory } from "react-router";


export const LoginForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }


    return (
        <InputsContainer>
            <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color="primary"
                    margin={"normal"}
                >
                    Fazer Login
                </Button>
            </form>
        </InputsContainer>
    )
}
