import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

export const PostDetailsPage = () => {
    useProtectedPage()
    return(
        <div>
            <p>Post Details Page</p>
        </div>
    )
}

