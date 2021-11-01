import React from "react";
import { Switch, Route } from "react-router-dom";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostDetailsPage } from '../pages/PostDetailsPage/PostDetailsPage';
import { SignupPage } from '../pages/SignupPage/SignupPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';


const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path={'/login'}>
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={'/cadastro'}>
                <SignupPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={'/'}>
                <FeedPage />
            </Route>

            <Route exact path="/detalhe/:id">
                <PostDetailsPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router;