import styled from "styled-components";
import '../../Assests/Fonts/styled.css'


export const HeaderContainer = styled.header`
    background-color: black;
    height: 60px;
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-template-rows: 60px;
    align-items: center;
`

export const Buttons = styled.button`
    margin-right: 30px;
    background-color:#ededed;
	border-radius:28px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:5px 8px;
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

export const LogoHeader = styled.p`
    margin-left: 30px;
    font-family: 'Oswald';
    color: white;
    font-size: 32px;
    cursor: pointer;
`

export default {HeaderContainer, Buttons, LogoHeader};