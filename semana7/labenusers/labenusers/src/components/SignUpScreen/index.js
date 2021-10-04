import React from "react";
import styled from "styled-components";
import axios from "axios";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* border: solid black 1px; */
    height: 200px;
    width: 200px;
    align-items: center;
    padding: 15px;
`

const SaveButton = styled.button`
    height: 20px;
    width: 50px;
    text-align: center;
    padding: 0;
    margin-top: 20px ;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class SignUpScreen extends React.Component {
    state = {
        email: "",
        name: "",
    };


    changeName = (event) => {
        this.setState({ name: event.target.value })
    };

    changeEmail = (event) => {
        this.setState({ email: event.target.value })
    };


    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = {
            headers: {
                Authorization: "sarah-romanhol-maryam"
            }
        };
        const body = {
            name: this.state.name,
            email: this.state.email
        };


        axios.post(url, body, headers)
            .then((res) => {
                this.setState({ name: "", email: "" })
                // this.getAllUsers();
                alert("Usuário cadastrado com sucesso!")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    render() {

        return (
            <div>
                <button onClick={this.props.goToUsers}>Ir para lista de usuários </button>
                <MainContainer>
                    <h2>Cadastro de usuários</h2>
                    <InputContainer>
                        <span>
                            <label>Nome:</label>
                            <input required id="name" type="text" onChange={this.changeName} value={this.state.name} />
                        </span>
                        <span>
                            <label>E-mail:</label>
                            <input required id="email" type="email" value={this.state.email} onChange={this.changeEmail}></input>
                        </span>
                        <SaveButton onClick={this.createUser}>Salvar</SaveButton>
                    </InputContainer>
                </MainContainer>
                
            </div>
        )

    }
}

export default SignUpScreen;
