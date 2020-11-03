import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import userEvent from '@testing-library/user-event';
import {waitFor} from '@testing-library/react';
import {TodoForm} from '../../../../src/views/ComponentsIntegration/components/TodoForm/TodoForm';

describe('TodoForm', () => {
    it('renders todo item when it has been added', async () => {
        const {getByPlaceholderText, getByRole, getByText} = renderWithRouter(<TodoForm />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'newTodo');
        await userEvent.click(getByRole('button', {name: /add/i}));

        await waitFor(() => expect(getByText('newTodo')).toBeInTheDocument());
    });

    it('does not render added todo item when it has been deleted', async () => {
        const {getByPlaceholderText, getByRole, queryByText, findByTestId} = renderWithRouter(<TodoForm />);

        await userEvent.type(getByPlaceholderText(/add new todo/i), 'newTodo');
        await userEvent.click(getByRole('button', {name: /add/i}));
        await userEvent.click(await findByTestId('delete-button-newTodo'));

        expect(queryByText('newTodo')).not.toBeInTheDocument();
    });
});
