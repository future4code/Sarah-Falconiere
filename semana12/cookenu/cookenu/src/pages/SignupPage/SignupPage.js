import React from "react";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { SignUpFormContainer, SignUpPageContainer } from './styled'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signup } from "../../services/access";
import { useHistory } from "react-router";

export const SignupPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, history)
    }


    return (
        <SignUpPageContainer>
            <SignUpFormContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"username"}
                    />
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
                        Cadastrar
                    </Button>
                </form>
            </SignUpFormContainer>
        </SignUpPageContainer>

    )
}

