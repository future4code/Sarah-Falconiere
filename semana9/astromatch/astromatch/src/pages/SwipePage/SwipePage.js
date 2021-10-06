import axios from "axios";
import React, { useEffect, useState } from "react";
import { SwipeButtonContainer, ImageContainer, SwipePageContainer, ProfilePicture, ProfileInformation } from './styled';
import { url, headers } from "../../constants/Constants";



function SwipePage(props) {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`${url}/person`)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const choosePerson = (boolean) => {
        
        const body = {
            id: profile.id,
            choice: boolean
        };

        axios.post(`${url}/choose-person`, body, headers)
        .then((res) => {
            console.log(res.data)
            console.log(profile.id)
        })
        .catch((err) => {
            alert('Algo deu errado. Tente novamente')
        })
        
        
        axios.get(`${url}/person`)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(profile)
            })
            .catch((err) => {
                alert('Algo deu errado. Tente novamente')
            })
    }




    return (
        <SwipePageContainer>
            <ImageContainer>
                <ProfilePicture src={profile.photo} />
                <ProfileInformation>
                    <p>{profile.name}, {profile.age}</p>
                    <p>{profile.bio}</p>
                </ProfileInformation>
            </ImageContainer>
            <SwipeButtonContainer>
                <button onClick={() => choosePerson('false')}>❌</button>
                <button onClick={() => choosePerson('true')}>❤</button>
            </SwipeButtonContainer>
        </SwipePageContainer>
    )
};

export default SwipePage