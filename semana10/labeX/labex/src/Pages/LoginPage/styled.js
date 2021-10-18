import styled from "styled-components";

export const LoginPageContainer = styled.div`
    background-color: black;
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;

    input{
        height: 30px;
        width: 350px;
        margin: 10px;
        border-radius: 10px;
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`
export const ButtonsContainer = styled.div`
    height: 50px;
    padding-top: 20px;

    button{
    margin-right: 20px;
    background-color:#ededed;
	border-radius:28px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:10px 20px;
	text-decoration:none;
	text-shadow:3px 0px 0px #ffffff;

    &:hover {
	background-color:#bfbbbb;
    }
    &:active {
	position:relative;
	top:1px;
    }
    }
`

export default { LoginPageContainer, ButtonsContainer };