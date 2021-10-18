import styled from "styled-components";

export const CreateTripContainer = styled.div`
    background-color: black;
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormContainer = styled.form`
    box-shadow: 2px 2px 5px 2px rgb(90 30 90 / 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: auto;
    margin: 30px;
    padding: 20px;
    border-radius: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;


    input{
        height: 30px;
        width: 400px;
        margin: 10px;
        border-radius: 10px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`
export const ButtonTurnBack = styled.button`
    background-color:#ededed;
	border-radius:28px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:10px 10px;
	text-decoration:none;
	text-shadow:3px 0px 0px #ffffff;

&:hover {
	background-color:#bfbbbb;
}
&:active {
	position:relative;
	top:1px;
}
`

export default { CreateTripContainer,  FormContainer, ButtonTurnBack}