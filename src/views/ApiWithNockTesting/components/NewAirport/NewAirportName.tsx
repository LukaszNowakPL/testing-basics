import React from 'react';
import {TableCell, TextField} from '@material-ui/core';
import {useField} from 'formik';

export const NewAirportName: React.FC = () => {
    const [field, {error}] = useField('name');

    return (
        <TableCell component="th" scope="row">
            <TextField {...field} label={'Name'} id={'new-airport-name'} error={!!error} helperText={error} />
        </TableCell>
    );
};
