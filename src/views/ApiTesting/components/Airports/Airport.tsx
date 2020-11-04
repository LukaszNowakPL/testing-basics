import React from 'react';
import {TableCell, TableRow} from '@material-ui/core';
import {AirportDto} from '../../api/countryApi/countryDto';

interface AirportProps {
    airport: AirportDto;
}

export const Airport: React.FC<AirportProps> = ({airport}) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {airport.name}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
                {airport.iata}
            </TableCell>
        </TableRow>
    );
};
