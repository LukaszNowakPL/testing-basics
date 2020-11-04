import React from 'react';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {MainRouter} from '../MainRouter/MainRouter';
import {Card, Container} from '@material-ui/core';
import {mainArea} from './App.styles';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <CssBaseline />
            <Container maxWidth={'sm'}>
                <Header />
                <Card className={mainArea}>
                    <MainRouter />
                </Card>
                <Footer />
            </Container>
        </BrowserRouter>
    );
};
