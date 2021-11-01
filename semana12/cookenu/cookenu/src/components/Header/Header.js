import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import { useHistory } from 'react-router';


export default function Header({rightButtonText, setRightButtonText}) {
    const history = useHistory()
    const token = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText('Login')
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    return (
            <AppBar position="static">
                <StyledToolbar>
                    <Button onClick={() => goToFeed(history)} color="inherit">Labeddit</Button>
                    <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
                </StyledToolbar>
            </AppBar>
        
    );
}