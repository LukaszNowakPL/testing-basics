import React, {useEffect} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Airport} from './Airport';
import {useAirportsList} from '../../hooks/countries/useAirportsList';
import {useCountriesAirportsRoute} from '../../hooks/useCountriesAirportsRoute';
import {NewAirport} from '../NewAirport/NewAirport';
import {ErrorSnackbar} from '../../../../components/ErrorSnackbar/ErrorSnackbar';

export const Airports: React.FC = () => {
    const {isError, isFetching, airportsList, fetchAirportsList} = useAirportsList();
    const {params} = useCountriesAirportsRoute();

    useEffect(() => {
        if (params) {
            fetchAirportsList(params.id || '');
        }
    }, [fetchAirportsList, params]);

    if (isFetching) {
        return <p>Fetching...</p>;
    }

    return (
        <>
            {airportsList && (
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">IATA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {airportsList.map(airport => (
                                <Airport key={airport.iata} airport={airport} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <NewAirport fetchAirportsList={fetchAirportsList} countryId={params.id || ''} />
            <ErrorSnackbar open={isError} message="Fetching airports list failed" />
        </>
    );
};
