import Axios from 'axios';

export const axios = Axios.create({
    baseURL: '/integration-tests/api-testing/api',
});
