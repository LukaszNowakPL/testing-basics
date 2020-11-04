import {useCallback, useState} from 'react';
import {CountryDto} from '../../api/countryApi/countryDto';
import {getCountriesList} from '../../api/countryApi/countryApi';

export const useCountriesList = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [countriesList, setCountriesList] = useState<CountryDto[]>();

    const fetchCountriesList = useCallback(async () => {
        setIsFetching(true);
        try {
            const countries = await getCountriesList();
            setCountriesList(countries.data.countries);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        countriesList,
        fetchCountriesList,
    };
};
