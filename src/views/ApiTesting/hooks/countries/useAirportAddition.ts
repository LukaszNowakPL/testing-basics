import {useCallback, useState} from 'react';
import {NewAirportForm} from '../../api/countryApi/countryDto';
import {postAirport} from '../../api/countryApi/countryApi';

export const useAirportAddition = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const addAirport = useCallback(async (params: NewAirportForm, countryId: string) => {
        setIsFetching(true);
        try {
            await postAirport(params, countryId);
        } catch {
            setIsError(true);
            return false;
        } finally {
            setIsFetching(false);
        }

        return true;
    }, []);

    return {
        isFetching,
        isError,
        addAirport,
    };
};
