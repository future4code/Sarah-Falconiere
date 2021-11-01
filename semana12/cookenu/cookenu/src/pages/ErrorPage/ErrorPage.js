import React from "react";
import { ErrorPageContainer, ImagemError } from "./styled";
import macaroni from '../../assets/imgs/macaroni-1543.png';


export const ErrorPage = () => {
    return(
        <ErrorPageContainer>
            <ImagemError src={macaroni} />
            <h2>Erro 404 - Página não encontrada</h2>
        </ErrorPageContainer>
    )
}

