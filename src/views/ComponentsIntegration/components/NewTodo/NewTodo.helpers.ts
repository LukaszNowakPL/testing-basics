import {FormValues} from './NewTodo.types';

export const getFormValidation = ({newTodo}: FormValues, todos: string[]) => {
    const errors: any = {};

    if (!newTodo) {
        errors.newTodo = 'required';
    } else if (todos.includes(newTodo)) {
        errors.newTodo = 'must be unique';
    }

    return errors;
};
