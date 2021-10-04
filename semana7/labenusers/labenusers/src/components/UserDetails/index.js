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
        userName: this.props.userName,
        userEmail: this.props.userEmail,
        userId: this.props.userId
    }

    
    deleteUser = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        const headers = {
            headers: {
                Authorization: "sarah-romanhol-maryam"
            }
        };


        if (window.confirm("tem certeza disso?")) {
            try {
                console.log(id)
                const res = await axios.delete(url, headers)
                console.log("Passou aq")
                alert("Usuário deletado com sucesso!")
            }
            catch (err) {
                alert(err.response.data)
            }
        } else {
            return (<p>{this.state.userName} - {this.state.userEmail}</p>)
        }
    };

    render() {
        const teste = <div>
            <p>{this.state.userName} - {this.state.userEmail}</p>
            <button onClick={() => this.deleteUser(this.props.userId)}>X</button>

        </div>
        return (
            <div>
                <button onClick={this.props.goToUsers}>Voltar</button>
                {teste}
            </div>
        )
    }
}