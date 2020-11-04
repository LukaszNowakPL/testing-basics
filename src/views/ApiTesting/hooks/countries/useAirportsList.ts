import {useCallback, useState} from 'react';
import {AirportDto} from '../../api/countryApi/countryDto';
import {getAirportsList} from '../../api/countryApi/countryApi';

export const useAirportsList = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [airportsList, setAirportsList] = useState<AirportDto[]>();

    const fetchAirportsList = useCallback(async (id: string) => {
        setIsFetching(true);
        try {
            const airports = await getAirportsList(id);
            setAirportsList(airports.data.airports);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        airportsList,
        fetchAirportsList,
    };
};
