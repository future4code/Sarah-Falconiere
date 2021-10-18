import styled from "styled-components";

export const ListTripsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
`

export const PageContainer = styled.div`
    background-color: black;
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin: 0;
`

export const ButtonsListTrips = styled.button`
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

export const TripContainer = styled.div`
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    padding: 15px 15px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 5px 2px rgb(90 30 90 / 50%);

    &:hover {
	background-color:#535353;
}
`
export const ButtonsContainer = styled.div`
    height: 50px;
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
`

export default { ListTripsContainer, ButtonsContainer, PageContainer, ButtonsListTrips, TripContainer };
