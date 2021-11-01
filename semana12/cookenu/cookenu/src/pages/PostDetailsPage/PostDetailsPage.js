import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import {useParams} from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

export const PostDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    console.log(params)
    const post = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)
    console.log(post)
    return(
        <div>
            <p>Post Details Page</p>
        </div>
    )
}

