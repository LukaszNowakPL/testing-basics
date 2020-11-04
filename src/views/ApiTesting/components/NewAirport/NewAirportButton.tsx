import React from 'react';
import {Button, TableCell} from '@material-ui/core';
import {useFormikContext} from 'formik';

export const NewAirportButton: React.FC = () => {
    const {dirty, isValid} = useFormikContext();

    const isDisabled = !dirty || !isValid;

    return (
        <TableCell component="th" scope="row">
            <Button variant={'contained'} color={'primary'} disabled={isDisabled} type={'submit'}>
                Add
            </Button>
        </TableCell>
    );
};
