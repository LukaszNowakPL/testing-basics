import React from 'react';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {MainRouter} from '../MainRouter/MainRouter';
import {Container} from '@material-ui/core';

export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <Container maxWidth={'sm'}>
                <Header />
                <MainRouter />
                <Footer />
            </Container>
        </BrowserRouter>
    );
};
