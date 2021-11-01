import { Card, TextField } from "@material-ui/core";
import styled from "styled-components";

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`

export const StyledCard = styled(Card)`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 1px 1px 5px 1px grey;
    margin-bottom: 20px;
`

export const StyledTextField = styled(TextField)`
    width: 400px;
`

export const StyledCardToPost = styled(Card)`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
`