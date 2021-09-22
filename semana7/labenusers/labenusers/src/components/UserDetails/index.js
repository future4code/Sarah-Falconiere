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

export default class UserDetails extends React.Component {
    state = {
        users: [],
        currentUser: []
    }


    componentDidMount = () => {
        const userID = 
        this.getUserById()
    };

    getUserById = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        const headers = {
            headers: {
                Authorization: "sarah-romanhol-maryam"
            }
        }

        axios.get(url, headers)
            .then((response) => {
                this.setState({ currentUser: response.data })
            }).catch((error) => {
                alert(error.response.data.message)
            })
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

    render() {
        const renderedUsers = this.state.currentUser.filter((user) => {
            return (
                <ContainerListUsers key={user.id}>
                    <li> {user.name} - {user.email}</li>

                    <button onClick={() => this.deleteUser(user.id)}>X</button>
                </ContainerListUsers>
            )
        });

        return (
            <div>
                <button onClick={this.props.goToUsers}>Voltar</button>
                {renderedUsers}
            </div>
        )
    }
}