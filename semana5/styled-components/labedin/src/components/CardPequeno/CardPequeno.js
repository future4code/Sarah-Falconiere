import React from 'react';
import styled from 'styled-components'

const ContainerTexto = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: solid black 1px;
    width: 541px;
    height: 80px;
    margin: 15px;
`

const IconesPequenos = styled.img `
    width: 40px;
`

const TituloIcone = styled.h4`
    margin: 0 8px;
`
function CardPequeno(props) {
    return (
        <ContainerTexto>
            <IconesPequenos src={ props.imagem } />
            <TituloIcone>{ props.nome }</TituloIcone>
            <p>{ props.descricao }</p>
        </ContainerTexto>
    )
}

export default CardPequeno;