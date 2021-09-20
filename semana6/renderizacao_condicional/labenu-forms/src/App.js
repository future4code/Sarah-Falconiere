import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';



class App extends React.Component {
  
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        break
      case 2:
        return <Etapa2 />
        break
      case 3:
        return <Etapa3 />
          break
      case 4:
        return <Final />
        break
      default: 
        console.log("etapa nao existe")
        break
    }
  };

  irParaProximaEtapa = () => {
    let contador = this.state.etapa + 1
    if(contador < 5) {
      this.setState({ etapa: contador})
    }
    
  };

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}


export default App;
