import React from 'react';
import {footerContainer} from './Footer.style';
import {Card} from '@material-ui/core';

export const Footer: React.FC = () => {
    const actualDate = new Date();
    return (
        <Card className={footerContainer}>
            {actualDate.getFullYear()} by{' '}
            <a href="https://github.com/LukaszNowakPL/" target="_blank" rel="noopener noreferrer">
                Łukasz Nowak
            </a>
        </Card>
    );
};
