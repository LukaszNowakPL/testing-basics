import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {NewTodo} from '../../../../src/views/EngineerApproach/components/NewTodo/NewTodo';
import userEvent from '@testing-library/user-event';
import {waitFor} from '@testing-library/react';

describe('NewTodo', () => {
    const todos: string[] = [];
    const onSubmit = jest.fn();

    // Bad example:
    // - It might be tested on TodoForm
    // - When you change the name of onSubmit prop test will fail
    it('calls onSubmit prop on add button click', async () => {
        const onSubmitMock = jest.fn();
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmitMock} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');
        await userEvent.click(getByRole('button', {name: /add/i}));

        await waitFor(() => expect(onSubmitMock).toHaveBeenCalledTimes(1));
        expect(onSubmitMock).toHaveBeenCalledWith(['testTodo']);
    });

    // Bad example:
    // - Arrange-Act-Assert pattern is broken
    // - Act and Assert part is repeated (because of typing the name and checking button state twice)
    // - It's better to write two separated tests
    it('makes add button disabled when typed todo is on a list already and enabled when new todo is unique', async () => {
        const todos = ['testTodo'];
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');

        await waitFor(() => expect(getByRole('button', {name: /add/i})).toBeDisabled());

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'newTestTodo');

        await waitFor(() => expect(getByRole('button', {name: /add/i})).toBeEnabled());
    });
});
