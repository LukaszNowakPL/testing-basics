import {generatePath, useParams, useRouteMatch} from 'react-router';
import {useHistory} from 'react-router-dom';
import {useCallback} from 'react';
import {ROUTES} from '../../../helpers/routes';

interface CountriesAirportsRouteParams {
    id?: string;
}

interface UseCountriesAirortsRoute {
    params: CountriesAirportsRouteParams;
    matchedParams: CountriesAirportsRouteParams | null;
    setCountriesAirportsRoute: (countryId: string) => void;
}

export const useCountriesAirportsRoute = (): UseCountriesAirortsRoute => {
    const match = useRouteMatch<CountriesAirportsRouteParams>(ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS);
    const params = useParams();
    const matchedParams = match && match.params;
    const history = useHistory();

    const setCountriesAirportsRoute = useCallback(
        (countryId: string) => {
            const path = generatePath(ROUTES.API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS, {id: countryId});
            history.push(path);
        },
        [history],
    );

    return {
        params,
        matchedParams,
        setCountriesAirportsRoute,
    };
};
