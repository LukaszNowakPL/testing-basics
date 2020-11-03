import React from 'react';
import {deleteButton, todoItem} from './TodoList.styles';

interface TodoListItemProps {
    todo: string;
    onDelete: (todo: string) => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, onDelete}) => {
    const handleClick = () => {
        onDelete(todo);
    };

    return (
        <span className={todoItem}>
            {todo}
            <button data-testId={`delete-button-${todo}`} className={deleteButton} onClick={handleClick}>
                x
            </button>
        </span>
    );
};
