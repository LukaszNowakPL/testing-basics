import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {NewTodo} from '../../../../src/views/ComponentsIntegration/components/NewTodo/NewTodo';
import userEvent from '@testing-library/user-event';
import {waitFor} from '@testing-library/react';

describe('NewTodo', () => {
    const todos: string[] = [];
    const onSubmit = jest.fn();

    it('renders component', async () => {
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        expect(getByPlaceholderText(/add new todo/i)).toBeInTheDocument();

        const button = getByRole('button', {name: /add/i});
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('show "must be unique" error when typed todo is on a list already', async () => {
        const todos = ['testTodo'];
        const {getByPlaceholderText, getByText} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');

        await waitFor(() => expect(getByText(/must be unique/i)).toBeInTheDocument());
    });

    it('makes add button disabled when typed todo is on a list already', async () => {
        const todos = ['testTodo'];
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');

        await waitFor(() => expect(getByRole('button', {name: /add/i})).toBeDisabled());
    });

    it('show "required" error when todo is typed and then erased', async () => {
        const {getByPlaceholderText, getByText} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');
        await userEvent.clear(getByPlaceholderText(/add new todo/i));

        await waitFor(() => expect(getByText(/required/i)).toBeInTheDocument());
    });

    it('makes add button active when typed todo is not on a todo list', async () => {
        const todos = ['testTodo'];
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'newTestTodo');

        await waitFor(() => expect(getByRole('button', {name: /add/i})).toBeEnabled());
    });

    it('clears input on button click', async () => {
        const {getByPlaceholderText, getByRole} = renderWithRouter(<NewTodo todos={todos} onSubmit={onSubmit} />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'testTodo');
        await userEvent.click(getByRole('button', {name: /add/i}));

        await waitFor(() => expect(getByPlaceholderText(/add new todo/i)).toHaveValue(''));
    });
});
