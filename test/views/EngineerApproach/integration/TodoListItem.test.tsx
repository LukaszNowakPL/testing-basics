import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import userEvent from '@testing-library/user-event';
import {TodoListItem} from '../../../../src/views/EngineerApproach/components/TodoList/TodoListItem';

describe('TodoListItem', () => {
    const onDelete = jest.fn();

    // Bad example:
    // - TodoListItem is a subcomponent of TodoList so any tests should focus on a main component
    // - Nevertheless it might be tested on wider integration test of TodoForm
    it('renders component', () => {
        const todoMock = 'todo name';
        const {getByText, getByTestId} = renderWithRouter(<TodoListItem todo={todoMock} onDelete={onDelete} />);

        expect(getByText('todo name')).toBeInTheDocument();
        expect(getByTestId('delete-button-todo name')).toBeInTheDocument();
    });

    // Bad example:
    // - This is test for subcomponent
    // - It might be tested on wider integration test of TodoForm
    // - Now we test same functionality on TodoForm, TodoList and TodoListItem integration tests. Any small change on those components most probable require change on all three tests
    it('calls onDelete prop on delete button click', async () => {
        const todoMock = 'todo name';
        const onDeleteMock = jest.fn();

        const {getByTestId} = renderWithRouter(<TodoListItem todo={todoMock} onDelete={onDeleteMock} />);

        await userEvent.click(getByTestId('delete-button-todo name'));
        expect(onDeleteMock).toHaveBeenCalledTimes(1);
        expect(onDeleteMock).toHaveBeenCalledWith('todo name');
    });
});
