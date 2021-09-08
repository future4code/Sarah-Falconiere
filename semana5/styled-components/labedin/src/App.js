import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoSarah from './img/foto_sarah_perfil.jpg'
import fotoLabenu from './img/labenu.png'
import fotoUFV from './img/UFV.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoEmail from './img/email.jpg'
import fotoLocalizacao from './img/localizacao.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoSarah} 
          nome="Sarah Romanhol Falconiere" 
          descricao="Oi, eu sou a Sarah. Sou engenheira ambiental e futura dev. Gosto de assistir séries o dia inteiro e tomar café."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem={fotoEmail}
        nome="E-mail:"
        descricao="sarah@gmail.com"
      />

<CardPequeno
        imagem={fotoLocalizacao}
        nome="Endereço:"
        descricao="Rua Sarah"
      />


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={fotoLabenu} 
          nome="Labenu" 
          descricao="Estudando para virar dev" 
        />
        
        <CardGrande 
          imagem={fotoUFV}
          nome="UFV" 
          descricao="Estudei para virar engenheira"
          />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
