import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";


export const FeedPage = () => {
    useProtectedPage()
    return(
        <div>
            <p>Feed Page</p>
            <Button variant="contained" color="primary">Primary</Button>
        </div>
    )
}
