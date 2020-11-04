import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Airports} from '../../../../src/views/ApiTesting/components/Airports/Airports';
import {waitFor} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import {getAirportsList, postAirport} from '../../../../src/views/ApiTesting/api/countryApi/countryApi';
import {
    getAirportsListResponse400Mock,
    getAirportsListResponseMock,
    postAirportResponse400Mock,
    postAirportResponseMock,
} from '../_helpers/api/countryApi.mocks';
import {ROUTES} from '../../../../src/helpers/routes';
import userEvent from '@testing-library/user-event';

jest.mock('../../../../src/views/ApiTesting/api/countryApi/countryApi');

describe('Airports', () => {
    beforeEach(() => {
        mocked(getAirportsList).mockResolvedValue(getAirportsListResponseMock);
        mocked(postAirport).mockResolvedValue(postAirportResponseMock);
    });

    const sendNewAirport = async () => {
        const render = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-testing/countries/1/airports'],
            ROUTES.API_TESTING_COUNTRIES_AIRPORTS,
        );

        const {getByLabelText, getByText} = render;

        await waitFor(() => {
            expect(getAirportsList).toHaveBeenCalledTimes(1);
        });

        await userEvent.type(getByLabelText(/name/i), 'test name');
        await userEvent.type(getByLabelText(/iata code/i), 'xyz');
        await userEvent.click(getByText(/add/i));

        return render;
    };

    it('calls getAirportsList api function on component load', async () => {
        renderWithRouter(<Airports />, ['/integration-tests/api-testing/countries/1/airports'], ROUTES.API_TESTING_COUNTRIES_AIRPORTS);
        await waitFor(() => {
            expect(getAirportsList).toHaveBeenCalledTimes(1);
        });
    });

    it('renders fetching text during fetching data', async () => {
        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-testing/countries/1/airports'],
            ROUTES.API_TESTING_COUNTRIES_AIRPORTS,
        );

        expect(getByText(/fetching.../i)).toBeInTheDocument();

        await waitFor(() => expect(getAirportsList).toHaveBeenCalledTimes(1));
    });

    it('renders error message if getAirportsList is rejected', async () => {
        mocked(getAirportsList).mockRejectedValue(getAirportsListResponse400Mock);
        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-testing/countries/1/airports'],
            ROUTES.API_TESTING_COUNTRIES_AIRPORTS,
        );

        await waitFor(() => expect(getAirportsList).toHaveBeenCalledTimes(1));

        expect(getByText(/fetching airports list failed/i)).toBeInTheDocument();
    });

    it('renders data of fetched airport', async () => {
        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-testing/countries/1/airports'],
            ROUTES.API_TESTING_COUNTRIES_AIRPORTS,
        );

        await waitFor(() => expect(getAirportsList).toHaveBeenCalledTimes(1));

        expect(getByText(/mocked airport name/i)).toBeInTheDocument();
        expect(getByText(/abc/i)).toBeInTheDocument();
    });

    it('calls postAirport api function for posting new airport on add button click', async () => {
        await sendNewAirport();

        await waitFor(() => {
            expect(postAirport).toHaveBeenCalledTimes(1);
            expect(postAirport).toHaveBeenCalledWith({name: 'test name', iata: 'xyz'}, '1');
        });
    });

    it('renders error message if postAirport is rejected', async () => {
        mocked(postAirport).mockRejectedValue(postAirportResponse400Mock);
        const {getByText} = await sendNewAirport();

        await waitFor(() => expect(getByText(/adding airport failed/i)).toBeInTheDocument());
    });

    it('recalls getAirportsList api function after successfully posting new airport', async () => {
        await sendNewAirport();

        await waitFor(() => expect(getAirportsList).toHaveBeenCalledTimes(2));
    });
});
