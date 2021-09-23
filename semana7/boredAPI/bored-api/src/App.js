import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const Card = styled.span`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border: solid black 1px;
  margin: 5px;
  padding: 5px;
`

const CardHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 10px;
  padding: 5px;
`


export default class App extends React.Component {

  state = {
    activityRandom: {},
    activityPrice: {},
    activityAccessibility: {},
    activityParticipants: {},
    participantsNumber: '',
    priceMin: '',
    priceMax: '',
    accessibility: ''
  }

  getRandomActivity = () => {
    axios
    .get("https://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data);
      this.setState({ activityRandom: res.data })
    })
    .catch((err) => {
      console.log(err.response);
    })
  };

  getParticipantsActivity = (participants) => {
    axios
    .get(`https://www.boredapi.com/api/activity?participants=${participants}`)
    .then((res) => {
      console.log(res.data);
      this.setState({ activityParticipants: res.data })
    })
    .catch((err) => {
      alert(err.response);
    })
  };

  changeParticipantesNumber = (ev) => {
    this.setState({ participantsNumber: ev.target.value})
  };

  changePriceMin = (ev) => {
    this.setState({ priceMin: ev.target.value})
  };

  changePriceMax = (ev) => {
    this.setState({ priceMax: ev.target.value})
  };

  changeAccessibility = (ev) => {
    this.setState({ accessibility: ev.target.value})
  };


  getPriceActivity = (min, max) => {
    axios
    .get(`http://www.boredapi.com/api/activity?minprice=${min}&maxprice=${max}`)
    .then((res) => {
      console.log(res.data);
      this.setState({ activityPrice: res.data })
    })
    .catch((err) => {
      alert(err);
    })
  };

  getAccessibilityActivity = (min) => {
    const max = 1;
    axios
    .get(`http://www.boredapi.com/api/activity?minprice=${min}&maxprice=${max}`)
    .then((res) => {
      console.log(res.data);
      this.setState({ activityAccessibility: res.data })
    })
    .catch((err) => {
      alert(err);
    })
  };

  render() {

    return (
      <div>
        <Header>
          <h1>Está sem nada pra fazer ou está sem idéias do que pode fazer no final de semana?</h1>
          <h3>Na verdade sabemos que você é um atoa, e nao tem nada de errado nisso. Fizemos esse site pensando nas suas necessidades</h3>
        </Header>
        <CardsContainer>
          <Card>
            <CardHeader>
              <h3>Escolha uma atividade aleatória</h3>
              <button onClick={this.getRandomActivity}>Escolher</button>
            </CardHeader>

            <p>Nome: {this.state.activityRandom.activity}</p>
            <p>Tipo: {this.state.activityRandom.type}</p>
            <p>Participantes: {this.state.activityRandom.participants}</p>
            <p>Preço: $ {this.state.activityRandom.price}</p>
            <p>Acessibilidade: {this.state.activityRandom.accessibility}</p>
          </Card>

          <Card>
            <CardHeader>
              <h3>Escolha uma atividade pelo número de participantes</h3>
              <label>Numero de participantes:</label>
              <input value={this.state.participantsNumber} onChange={this.changeParticipantesNumber}></input>
              <button onClick={() => {this.getParticipantsActivity(this.state.participantsNumber)}}>Escolher</button>
            </CardHeader>

            <p>Nome: {this.state.activityParticipants.activity}</p>
            <p>Tipo: {this.state.activityParticipants.type}</p>
            <p>Participantes: {this.state.activityParticipants.participants}</p>
            <p>Preço: $ {this.state.activityParticipants.price}</p>
            <p>Acessibilidade: {this.state.activityParticipants.accessibility}</p>
          </Card>

          <Card>
            <CardHeader>
              <h3>Escolha uma atividade pelo preço</h3>
              <label>Preço mínimo:</label>
              <input value={this.state.priceMin} onChange={this.changePriceMin}></input>
              <label>Preço máximo:</label>
              <input value={this.state.priceMax} onChange={this.changePriceMax}></input>
              <button onClick={() => {this.getPriceActivity(this.state.priceMin, this.state.priceMax)}}>Escolher</button>
            </CardHeader>

            <p>Nome: {this.state.activityPrice.activity}</p>
            <p>Tipo: {this.state.activityPrice.type}</p>
            <p>Participantes: {this.state.activityPrice.participants}</p>
            <p>Preço: $ {this.state.activityPrice.price}</p>
            <p>Acessibilidade: {this.state.activityPrice.accessibility}</p>
          </Card>

          <Card>
            <CardHeader>
              <h3>Escolha uma atividade pelo índice de acessibilidade</h3>
              <label>Mínimo de acessibilidade:</label>
              <input value={this.state.accessibility} onChange={this.changeAccessibility}></input>
              <button onClick={() => {this.getAccessibilityActivity(this.state.accessibility)}}>Escolher</button>
            </CardHeader>
            <p>Nome: {this.state.activityAccessibility.activity}</p>
            <p>Tipo: {this.state.activityAccessibility.type}</p>
            <p>Participantes: {this.state.activityAccessibility.participants}</p>
            <p>Preço: $ {this.state.activityAccessibility.price}</p>
            <p>Acessibilidade: {this.state.activityAccessibility.accessibility}</p>
          </Card>
        </CardsContainer>
      </div>
    );
  }
}
