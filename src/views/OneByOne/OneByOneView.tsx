import React from 'react';
import {Title} from './components/Title/Title';
import {SearchForm} from './components/SearchForm/SearchForm';

export const OneByOneView: React.FC = () => {
    return (
        <section>
            <Title />
            <SearchForm />
        </section>
    );
};
