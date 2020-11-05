import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Countries} from '../../../../src/views/ApiWithNockTesting/components/Countries/Countries';
import {waitFor} from '@testing-library/react';
import {getCountriesListResponseDataMock} from '../_helpers/api/countryApi.mocks';
import {ROUTES} from '../../../../src/helpers/routes';
import nock from 'nock';

const defaultScope = () => {
    return nock('http://localhost')
        .get('/integration-tests/api-with-nock-testing/api/countries')
        .reply(200, getCountriesListResponseDataMock);
};

const defaultErrorScope = () => {
    return nock('http://localhost')
        .get('/integration-tests/api-with-nock-testing/api/countries')
        .reply(500, '');
};

describe('Countries', () => {
    it('calls get /integration-tests/api-with-nock-testing/api/countries on component load', async () => {
        const scope = defaultScope();

        renderWithRouter(<Countries />, ['/integration-tests/api-with-nock-testing/countries'], ROUTES.API_WITH_NOCK_TESTING_COUNTRIES);

        await waitFor(() => scope.done());
    });

    it('renders error message if api call is rejected', async () => {
        const scope = defaultErrorScope();

        const {getByText} = renderWithRouter(
            <Countries />,
            ['/integration-tests/api-with-nock-testing/countries'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES,
        );

        await waitFor(() => scope.done());

        await waitFor(() => expect(getByText(/fetching countries list failed/i)).toBeInTheDocument());
    });

    it('renders data of fetched country', async () => {
        const scope = defaultScope();

        const {getByText} = renderWithRouter(
            <Countries />,
            ['/integration-tests/api-with-nock-testing/countries'],
            ROUTES.API_WITH_NOCK_TESTING_COUNTRIES,
        );

        await waitFor(() => scope.done());

        await waitFor(() => expect(getByText(/mocked country name/i)).toBeInTheDocument());
    });
});
