import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AirportDto, CountryDto} from '../../../../../src/views/ApiTesting/api/countryApi/countryDto';

interface Response<T> {
    response: T;
}

const responseMock: AxiosResponse = {
    data: {},
    status: 200,
    statusText: 'statusText',
    headers: 'headers',
    config: 'config' as AxiosRequestConfig,
    //@ts-ignore
    error: 'error',
    message: 'message',
};

const countriesListItemMock: CountryDto = {
    id: '1',
    name: 'mocked country name',
};

export const countriesListMock: CountryDto[] = [countriesListItemMock];

interface GetCountriesListResponse {
    countries: CountryDto[];
}

export const getCountriesListResponseMock: AxiosResponse<GetCountriesListResponse> = {
    ...responseMock,
    data: {countries: countriesListMock},
};

export const getCountriesListResponse400Mock: Response<AxiosResponse<{}>> = {
    response: {
        ...responseMock,
        status: 400,
    },
};
const airportsListItemMock: AirportDto = {
    id: '1',
    country_id: '1',
    name: 'mocked airport name',
    iata: 'ABC',
};

export const airportsListMock: AirportDto[] = [airportsListItemMock];

interface GetAirportsListResponse {
    airports: AirportDto[];
}

export const getAirportsListResponseMock: AxiosResponse<GetAirportsListResponse> = {
    ...responseMock,
    data: {airports: airportsListMock},
};

export const getAirportsListResponse400Mock: Response<AxiosResponse<{}>> = {
    response: {
        ...responseMock,
        status: 400,
    },
};

export const postAirportResponseMock: AxiosResponse = {
    ...responseMock,
};

export const postAirportResponse400Mock: Response<AxiosResponse<{}>> = {
    response: {
        ...responseMock,
        status: 400,
    },
};
