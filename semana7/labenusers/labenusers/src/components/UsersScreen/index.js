import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerListUsers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 200px;
    padding: 10px;
    
`

export default class UsersScreen extends React.Component {
    state = {
        users: []
    }


    componentDidMount = () => {
        this.getAllUsers()
    };

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const headers = {
            headers: {
                Authorization: "sarah-romanhol-maryam"
            }
        }

        axios.get(url, headers)
            .then((response) => {
                this.setState({ users: response.data })
            }).catch((error) => {
                alert(error.response.data.message)
            })
    };


    deleteUser = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        const headers = {
            headers: {
                Authorization: "sarah-romanhol-maryam"
            }
        };

        if (window.confirm("tem certeza disso?")) {
            try {
                const res = await axios.delete(url, headers)
                this.getAllUsers()
                alert("Usuário deletado com sucesso!")
            }
            catch (err) {
                alert(err.responde.data)
            }
        } else {
            this.getAllUsers()
        }
    };

    // axios.delete(url, headers)
    // .then((res) => {
    //     this.getAllUsers()
    //     alert("Usuário deletado com sucesso!")

    // })
    // .catch((err) => {
    //     alert(err.responde.data)
    // })


    render() {
        const renderedUsers = this.state.users.map((user) => {
            return (
                <ContainerListUsers key={user.id}>
                    <li onClick={() => this.props.goToUserDetails(user.id)}> {user.name}</li>
                    <button onClick={() => this.deleteUser(user.id)}>X</button>
                </ContainerListUsers>
            )
        })

        return (
            <div>
                <button onClick={this.props.goToSignUp}>Voltar para cadastro</button>
                <p>Lista de usuários</p>
                <div>
                    <h2>Usuários cadastrados</h2>
                    {renderedUsers}
                </div>
            </div>
        )

    }
}
