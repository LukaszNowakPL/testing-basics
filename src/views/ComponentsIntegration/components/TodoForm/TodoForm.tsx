import React, {useState} from 'react';
import {NewTodo} from '../NewTodo/NewTodo';
import {TodoList} from '../TodoList/TodoList';

export const TodoForm: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <>
            <NewTodo todos={todos} onSubmit={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
};
