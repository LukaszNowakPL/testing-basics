import React from 'react';
import {listSeparator} from './TodoList.styles';
import {TodoListItem} from './TodoListItem';

interface TodoListProps {
    todos: string[];
    setTodos: (todos: string[]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) => {
    const handleDelete = (todo: string) => {
        setTodos(todos.filter(todoItem => todoItem !== todo));
    };

    return (
        <div className={listSeparator}>
            {todos.map(todo => (
                <TodoListItem key={todo} todo={todo} onDelete={handleDelete} />
            ))}
        </div>
    );
};
