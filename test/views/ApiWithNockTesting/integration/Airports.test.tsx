import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Airports} from '../../../../src/views/ApiWithNockTesting/components/Airports/Airports';
import {waitFor} from '@testing-library/react';
import {getAirportsListResponseDataMock} from '../_helpers/api/countryApi.mocks';
import {ROUTES} from '../../../../src/helpers/routes';
import userEvent from '@testing-library/user-event';
import nock from 'nock';

const defaultGetScope = () => {
    return nock('http://localhost')
        .get('/integration-tests/api-with-nock-testing/api/countries/1/airports')
        .reply(200, getAirportsListResponseDataMock);
};

const defaultGetErrorScope = () => {
    return nock('http://localhost')
        .get('/integration-tests/api-with-nock-testing/api/countries/1/airports')
        .reply(500, '');
};

const defaultPostScope = () => {
    return nock('http://localhost')
        .post('/integration-tests/api-with-nock-testing/api/countries/1/airports')
        .reply(200, '');
};

const defaultPostErrorScope = () => {
    return nock('http://localhost')
        .post('/integration-tests/api-with-nock-testing/api/countries/1/airports')
        .reply(500, '');
};

describe('Airports', () => {
    const sendNewAirport = async () => {
        const getScope = defaultGetScope();

        const render = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-with-nock-testing/countries/1/airports'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS,
        );

        const {getByLabelText, getByText} = render;

        await waitFor(() => getScope.done());

        await userEvent.type(getByLabelText(/name/i), 'test name');
        await userEvent.type(getByLabelText(/iata code/i), 'xyz');
        await userEvent.click(getByText(/add/i));

        return render;
    };

    it('calls get /integration-tests/api-with-nock-testing/api/countries/1/airports on component load', async () => {
        const scope = defaultGetScope();

        renderWithRouter(
            <Airports />,
            ['/integration-tests/api-with-nock-testing/countries/1/airports'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS,
        );

        await waitFor(() => scope.done());
    });

    it('renders fetching text during fetching data', async () => {
        const scope = defaultGetScope();

        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-with-nock-testing/countries/1/airports'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS,
        );

        expect(getByText(/fetching.../i)).toBeInTheDocument();

        await waitFor(() => scope.done());
    });

    it('renders error message if api call is rejected', async () => {
        const scope = defaultGetErrorScope();

        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-with-nock-testing/countries/1/airports'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS,
        );

        await waitFor(() => scope.done());

        expect(getByText(/fetching airports list failed/i)).toBeInTheDocument();
    });

    it('renders data of fetched airport', async () => {
        const scope = defaultGetScope();

        const {getByText} = renderWithRouter(
            <Airports />,
            ['/integration-tests/api-with-nock-testing/countries/1/airports'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS,
        );

        await waitFor(() => scope.done());

        expect(getByText(/mocked airport name/i)).toBeInTheDocument();
        expect(getByText(/abc/i)).toBeInTheDocument();
    });

    it('calls post /integration-tests/api-with-nock-testing/api/countries/1/airports on add button click', async () => {
        const postScope = defaultPostScope();

        await sendNewAirport();

        await waitFor(() => postScope.done());
    });

    it('renders error message if api call is rejected', async () => {
        const postScope = defaultPostErrorScope();

        const {findByText} = await sendNewAirport();

        await waitFor(() => postScope.done());

        expect(await findByText(/adding airport failed/i)).toBeInTheDocument();
    });

    it('recalls get /integration-tests/api-with-nock-testing/api/countries/1/airports after successfully posting new airport', async () => {
        const postScope = defaultPostScope();

        await sendNewAirport();
        const regetScope = defaultGetScope();

        await waitFor(() => postScope.done());
        await waitFor(() => regetScope.done());
    });
});
