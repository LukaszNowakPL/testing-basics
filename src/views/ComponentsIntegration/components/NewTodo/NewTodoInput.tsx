import React from 'react';
import {useField} from 'formik';
import {Grid, TextField} from '@material-ui/core';

export const NewTodoInput: React.FC = () => {
    const [field, {error}] = useField('newTodo');

    return (
        <Grid item xs={6}>
            <TextField {...field} size={'small'} placeholder={'Add new todo'} error={!!error} helperText={error} />
        </Grid>
    );
};
