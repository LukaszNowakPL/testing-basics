import {axios} from '../rest/axios';
import {NewAirportForm} from './countryDto';

export const getCountriesList = () => {
    return axios.get('/countries');
};

export const getAirportsList = (id: string) => {
    return axios.get(`/countries/${id}/airports`);
};

export const postAirport = (params: NewAirportForm, countryId: string) => {
    return axios.post(`/countries/${countryId}/airports`, params);
};
