import React from 'react';
import {Table, TableBody, TableRow} from '@material-ui/core';
import {Form, Formik} from 'formik';
import {NewAirportIata} from './NewAirportIata';
import {NewAirportName} from './NewAirportName';
import {NewAirportButton} from './NewAirportButton';
import {validate} from './NewAirport.helpers';
import {useAirportAddition} from '../../hooks/countries/useAirportAddition';
import {NewAirportForm} from '../../api/countryApi/countryDto';
import {ErrorSnackbar} from '../../../../components/ErrorSnackbar/ErrorSnackbar';

interface NewAirportProps {
    fetchAirportsList: (id: string) => void;
    countryId: string;
}

export const NewAirport: React.FC<NewAirportProps> = ({fetchAirportsList, countryId}) => {
    const {addAirport, isError} = useAirportAddition();

    const handleSubmit = async (values: NewAirportForm) => {
        if (await addAirport(values, countryId)) {
            fetchAirportsList(countryId);
        }
    };

    const initialValues: NewAirportForm = {name: '', iata: ''};

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
                <Form>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <NewAirportName />
                                <NewAirportIata />
                                <NewAirportButton />
                            </TableRow>
                        </TableBody>
                    </Table>
                </Form>
            </Formik>
            <ErrorSnackbar open={isError} message="Adding airport failed" />
        </>
    );
};
