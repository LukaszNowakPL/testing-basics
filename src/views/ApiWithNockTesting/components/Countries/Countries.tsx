import {Grid} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useCountriesList} from '../../hooks/countries/useCountriesList';
import {Country} from './Country';
import {Route, Switch} from 'react-router';
import {ROUTES} from '../../../../helpers/routes';
import {Airports} from '../Airports/Airports';
import {ErrorSnackbar} from '../../../../components/ErrorSnackbar/ErrorSnackbar';

export const Countries: React.FC = () => {
    const {isError, countriesList, fetchCountriesList} = useCountriesList();

    useEffect(() => {
        fetchCountriesList();
    }, [fetchCountriesList]);

    return (
        <Grid container>
            <Grid item xs={3}>
                {countriesList && countriesList.map(country => <Country key={country.id} country={country} />)}
            </Grid>
            <Grid item xs={9}>
                <Switch>
                    <Route path={ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS}>
                        <Airports />
                    </Route>
                </Switch>
            </Grid>
            <ErrorSnackbar open={isError} message="Fetching countries list failed" />
        </Grid>
    );
};
