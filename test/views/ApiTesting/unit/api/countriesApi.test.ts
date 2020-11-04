/**
 * @jest-environment jsdom
 */
import {mocked} from 'ts-jest/utils';
import {axios} from '../../../../../src/views/ApiTesting/api/rest/axios';
import {getAirportsList, getCountriesList, postAirport} from '../../../../../src/views/ApiTesting/api/countryApi/countryApi';

jest.mock('../../../../../src/views/ApiTesting/api/rest/axios');

describe('countryApi', () => {
    beforeEach(() => {
        mocked(axios.get).mockResolvedValue('getMock');
        mocked(axios.post);
    });

    it('calls request for countries list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getCountriesList();
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('/countries');
    });

    it('calls request for airports list and passes response', async () => {
        mocked(axios.get).mockResolvedValue({data: 'getDataMock'});
        const request = await getAirportsList('1');
        expect(request.data).toEqual('getDataMock');
        expect(axios.get).toHaveBeenCalledWith('/countries/1/airports');
    });

    it('calls request for airport post with given form', async () => {
        const apiForm = {
            name: 'test name',
            iata: 'ABC',
        };
        await postAirport(apiForm, '2');
        expect(axios.post).toHaveBeenCalledWith('/countries/2/airports', apiForm);
    });
});
