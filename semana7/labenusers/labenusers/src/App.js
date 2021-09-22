import React from "react";
import styled from "styled-components";
import axios from "axios";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
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

const ContainerListUsers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 200px;
    padding: 10px;
    
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



class App extends React.Component {
  state = {
    email: "",
    name: "",
    users: []
  };

  componentDidMount = () => {
    this.getAllUsers()
  };

  changeName = (event) => {
    this.setState({ name: event.target.value })
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value })
  };

  deleteUser = (id, e) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const newUsers = this.state.users.filter(item => item.id !== id);  
        this.setState({ users: newUsers });  
      })  
    // const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";
    // const headers = {
    //   headers: {
    //     Authorization: "sarah-romanhol-maryam"
    //   }
    // }

    // const newUsers = this.state.users.filter(item => item.id !== );

    // axios.delete(`${url}:${event}`, headers)
    // .then((response) => {
        
    //     this.setState({ users: newUsers }); 
    // }).catch((error) => {
    //   alert(error.response.data.message)
    // })
    
  }


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

  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const headers = {
      headers: {
        Authorization: "sarah-romanhol-maryam"
      }
    }

    const body = {
      name: this.state.name,
      email: this.state.email
    };
    axios.post(url, body, headers)
      .then((res) => {
        this.setState({ name: "", email: "" })
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message)
      })



  }


  render() {

    const renderedUsers = this.state.users.map((user) => {
      return (
        <ContainerListUsers key={user.id}>
          <li>{user.name}</li>
          <button onClick={(e) => this.deleteUser(user.id, e)}>X</button>
        </ContainerListUsers>
      )
    })

    return (
      <div>
        <button >Ir para página de </button>
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
          <div>
            <h2>Usuários cadastrados</h2>
            {renderedUsers}
          </div>
        </MainContainer>
      </div>
    )

  }
}

export default App;





