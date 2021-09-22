import React from "react";
import styled from "styled-components";
import axios from "axios";
import SignUpScreen from "./components/SignUpScreen";
import UsersScreen from "./components/UsersScreen";
import UserDetails from "./components/UserDetails";



class App extends React.Component {
  state = {
    currentScreen: "signUp"
  };

  pickScreen = () => {
    switch (this.state.currentScreen) {
      case "signUp":
        return <SignUpScreen goToUsers={this.goToUsers} />
      case "users":
        return <UsersScreen goToSignUp={this.goToSignUp} goToUserDetails={this.goToUserDetails}/>
      case "userDetails":
        return <UserDetails goToUsers={this.goToUsers}/>
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

  goToUserDetails = () => {
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





