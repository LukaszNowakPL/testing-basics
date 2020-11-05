import {AirportDto, CountryDto} from '../../../../../src/views/ApiWithNockTesting/api/countryApi/countryDto';

const countriesListItemMock: CountryDto = {
    id: '1',
    name: 'mocked country name',
};

interface GetCountriesListResponse {
    countries: CountryDto[];
}

export const getCountriesListResponseDataMock: GetCountriesListResponse = {
    countries: [countriesListItemMock],
};

const airportsListItemMock: AirportDto = {
    id: '1',
    country_id: '1',
    name: 'mocked airport name',
    iata: 'ABC',
};

interface GetAirportsListResponse {
    airports: AirportDto[];
}

export const getAirportsListResponseDataMock: GetAirportsListResponse = {
    airports: [airportsListItemMock],
};
