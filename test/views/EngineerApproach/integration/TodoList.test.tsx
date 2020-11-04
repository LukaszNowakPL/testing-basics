import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import userEvent from '@testing-library/user-event';
import {TodoList} from '../../../../src/views/EngineerApproach/components/TodoList/TodoList';

describe('TodoList', () => {
    const setTodos = jest.fn();

    // Bad example:
    // - It might be tested on wider integration test of TodoForm
    it('renders list of passed todos', () => {
        const todosMock = ['first', 'second', 'third'];
        const {getByText} = renderWithRouter(<TodoList todos={todosMock} setTodos={setTodos} />);

        expect(getByText('first')).toBeInTheDocument();
        expect(getByText('second')).toBeInTheDocument();
        expect(getByText('third')).toBeInTheDocument();
    });

    // Bad example:
    // - It might be tested on wider integration test of TodoForm
    // - It's strongly dependant on implementation (i.e. name of called prop, or knowledge that lis-item is a child of tested component)
    it('calls setTodos prop on delete button click', async () => {
        const todosMock = ['first', 'second', 'third'];
        const setTodosMock = jest.fn();

        const {getByTestId} = renderWithRouter(<TodoList todos={todosMock} setTodos={setTodosMock} />);

        await userEvent.click(getByTestId('delete-button-second'));
        expect(setTodosMock).toHaveBeenCalledTimes(1);
        expect(setTodosMock).toHaveBeenCalledWith(['first', 'third']);
    });
});
