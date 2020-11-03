import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {useFormikContext} from 'formik';

export const NewTodoButton: React.FC = () => {
    const {dirty, isValid} = useFormikContext();

    const isDisabled = !dirty || !isValid;

    return (
        <Grid item xs={6}>
            <Button variant={'contained'} color={'primary'} disabled={isDisabled} type={'submit'}>
                Add
            </Button>
        </Grid>
    );
};
