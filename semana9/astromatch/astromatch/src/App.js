import React, {useState, useEffect} from "react";
import MainCard from './components/MainCard/MainCard';
import styled from "styled-components";
import { url, headers } from "./constants/Constants";
import axios from "axios";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  margin: 0;
  padding: 10px;
  `

const ButtonLimpar = styled.button`
  align-self: flex-end;
`


function App() {

  const clear = () => {

    axios.put(`${url}/clear`, headers)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <AppContainer>
      <MainCard />
      <ButtonLimpar onClick={clear}>Limpar swipes e matches</ButtonLimpar>
    </AppContainer>
  );
}

export default App;
