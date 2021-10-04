import React from "react";
import styled from "styled-components";
import axios from "axios";
import SignUpScreen from "./components/SignUpScreen";
import UsersScreen from "./components/UsersScreen";
import UserDetails from "./components/UserDetails";



class App extends React.Component {
  state = {
    currentScreen: "signUp",
    user: []
  };

  pickScreen = () => {
    switch (this.state.currentScreen) {
      case "signUp":
        return <SignUpScreen goToUsers={this.goToUsers} />
      case "users":
        return <UsersScreen goToSignUp={this.goToSignUp} goToUserDetails={this.goToUserDetails}/>
      case "userDetails":
        return <UserDetails goToUsers={this.goToUsers} userId={this.state.user.id} userName={this.state.user.name} userEmail={this.state.user.email}/>
      default:
        return <h1>Erro! Página não encontrada!</h1>
    }
  }

  goToSignUp = () => {
    this.setState({ currentScreen: "signUp"})
  }

  goToUsers = () => {
    this.setState({ currentScreen: "users"})
  }

  goToUserDetails = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
      const headers = {
          headers: {
              Authorization: "sarah-romanhol-maryam"
          }
      }

      axios.get(url, headers)
          .then((response) => {
              this.setState({ user: response.data })
              console.log("Cliquei")
          }).catch((error) => {
              alert(error.response.data.message)
          })
    this.setState({ currentScreen: "userDetails"})
  }



  render() {

    return (
      <div>
        {this.pickScreen()}
      </div>
    )

  }
}

export default App;





