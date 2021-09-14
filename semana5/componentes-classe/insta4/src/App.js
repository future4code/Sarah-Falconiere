import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'sarinha'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKB1H8WbzAsfU_Et-5IdPE43h2KBwPUp7wew&usqp=CAU'}
          fotoPost={'https://picsum.photos/id/237/200/300'}
        />

        <Post
          nomeUsuario={'marcelinha'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/471797556125507584/XWuhytVG_400x400.jpeg'}
          fotoPost={'https://picsum.photos/seed/picsum/200/300'}
        />
      </MainContainer>
    );
  }
}

export default App;
