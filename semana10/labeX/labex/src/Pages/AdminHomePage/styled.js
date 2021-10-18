import styled from "styled-components";


export const AdminHomePageContainer = styled.div`
    background-color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TitlePage = styled.p`
        font-weight: bold;
        font-size: 30px;
        color: white;
        margin: 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 25px;

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

export const TripNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 18px;
    color: white;
    width: 500px;
    margin: 5px 0;
    border-radius: 20px;


    &:hover {
	background-color:#646060;
}
&:active {
	position:relative;
	top:1px;
}

p{
    cursor: pointer;
    margin-left: 20px;
}

button{
    margin-right: 20px;
    cursor: pointer;
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
}
`


export default { TitlePage, AdminHomePageContainer, TripNameContainer, ButtonsContainer };