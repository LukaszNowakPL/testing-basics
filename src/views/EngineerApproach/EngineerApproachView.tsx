import React from 'react';
import {Title} from './components/Title/Title';
import {TodoForm} from './components/TodoForm/TodoForm';

export const EngineerApproachView: React.FC = () => {
    return (
        <section>
            <Title />
            <TodoForm />
        </section>
    );
};
