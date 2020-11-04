import React from 'react';
import {renderWithRouter} from '../../../_helpers/renderWithRouters';
import {Countries} from '../../../../src/views/ApiTesting/components/Countries/Countries';
import {waitFor} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import {getCountriesList} from '../../../../src/views/ApiTesting/api/countryApi/countryApi';
import {getCountriesListResponse400Mock, getCountriesListResponseMock} from '../_helpers/api/countryApi.mocks';
import {ROUTES} from '../../../../src/helpers/routes';

jest.mock('../../../../src/views/ApiTesting/api/countryApi/countryApi');

describe('Countries', () => {
    beforeEach(() => {
        mocked(getCountriesList).mockResolvedValue(getCountriesListResponseMock);
    });

    it('calls getCountriesList api function on component load', async () => {
        renderWithRouter(<Countries />, ['/integration-tests/api-testing/countries'], ROUTES.API_TESTING_COUNTRIES);
        await waitFor(() => {
            expect(getCountriesList).toHaveBeenCalledTimes(1);
        });
    });

    it('renders error message if getCountriesList is rejected', async () => {
        mocked(getCountriesList).mockRejectedValue(getCountriesListResponse400Mock);
        const {getByText} = renderWithRouter(<Countries />, ['/integration-tests/api-testing/countries'], ROUTES.API_TESTING_COUNTRIES);

        await waitFor(() => expect(getCountriesList).toHaveBeenCalledTimes(1));

        expect(getByText(/fetching countries list failed/i)).toBeInTheDocument();
    });

    it('renders data of fetched country', async () => {
        const {getByText} = renderWithRouter(<Countries />, ['/integration-tests/api-testing/countries'], ROUTES.API_TESTING_COUNTRIES);

        await waitFor(() => expect(getCountriesList).toHaveBeenCalledTimes(1));

        expect(getByText(/mocked country name/i)).toBeInTheDocument();
    });
});
