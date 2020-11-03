import React from 'react';
import {Title} from './components/Title/Title';
import {TodoForm} from './components/TodoForm/TodoForm';

export const ComponentsIntegrationView: React.FC = () => {
    return (
        <section>
            <Title />
            <TodoForm />
        </section>
    );
};
