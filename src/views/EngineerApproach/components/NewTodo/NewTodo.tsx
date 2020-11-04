import React from 'react';
import {Form, Formik} from 'formik';
import {Grid} from '@material-ui/core';
import {NewTodoInput} from './NewTodoInput';
import {NewTodoButton} from './NewTodoButton';
import {FormValues} from './NewTodo.types';
import {getFormValidation} from './NewTodo.helpers';

interface NewTodoProps {
    todos: string[];
    onSubmit: (todos: string[]) => void;
}

export const NewTodo: React.FC<NewTodoProps> = ({todos, onSubmit}) => {
    const handleTodoSubmit = ({newTodo}: FormValues, {resetForm}: any) => {
        onSubmit([...todos, newTodo]);
        resetForm();
    };

    const validate = (values: FormValues) => {
        return getFormValidation(values, todos);
    };

    return (
        <Formik initialValues={{newTodo: ''}} onSubmit={handleTodoSubmit} enableReinitialize={true} validate={validate}>
            <Form>
                <Grid container spacing={2}>
                    <NewTodoInput />
                    <NewTodoButton />
                </Grid>
            </Form>
        </Formik>
    );
};
