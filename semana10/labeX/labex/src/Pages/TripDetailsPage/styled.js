import styled from "styled-components";

export const TripDetailPageContainer = styled.div`
    background-color: black;
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    button{
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
    margin: 10px;
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

export const TripDetailsContainer = styled.div`
    font-size: 18px;
    width: 600px;
`

export const CandidatesToApprovedContainer = styled.div`
    width: 300px;
    height: auto;
    margin: 10px;
    padding: 20px;

`

export default { CandidatesToApprovedContainer, TripDetailPageContainer, TripDetailsContainer };