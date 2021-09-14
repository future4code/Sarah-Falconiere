import React from 'react';
import styled from 'styled-components';


const ContainerTexto = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgContainer = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const NomeContainer = styled.h4`
    margin-bottom: 15px;
`

const ContainerInterno = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerTexto>
            <ImgContainer src={ props.imagem } />
            <ContainerInterno>
                <NomeContainer>{ props.nome }</NomeContainer>
                <p>{ props.descricao }</p>
            </ContainerInterno>
        </ContainerTexto>
    )
}

export default CardGrande;