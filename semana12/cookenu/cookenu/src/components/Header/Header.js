import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import { useHistory } from 'react-router';


export default function Header() {
    const history = useHistory()
    return (
            <AppBar position="static">
                <StyledToolbar>
                    <Button onClick={() => goToFeed(history)} color="inherit">Labeddit</Button>
                    <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
                </StyledToolbar>
            </AppBar>
        
    );
}