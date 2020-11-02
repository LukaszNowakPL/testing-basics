import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {Container} from '@material-ui/core';

export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <Container maxWidth={'sm'}>
                <p>Testing basics</p>
            </Container>
        </BrowserRouter>
    );
};
