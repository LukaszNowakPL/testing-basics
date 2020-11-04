import React from 'react';
import {TableCell, TextField} from '@material-ui/core';
import {useField} from 'formik';

export const NewAirportIata: React.FC = () => {
    const [field, {error}] = useField('iata');

    return (
        <TableCell component="th" scope="row" align="right">
            <TextField {...field} label={'IATA code'} id={'new-airport-iata'} error={!!error} helperText={error} />
        </TableCell>
    );
};
