import styled from "styled-components"

export const HomePageContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100vh;
`
export const HomeButton = styled.button`
    margin-right: 20px;
    background-color:#ededed;
	border-radius:28px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:16px 29px;
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

export default { HomePageContainer, HomeButton };