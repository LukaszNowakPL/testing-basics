import React from 'react';
import {Button} from '@material-ui/core';
import {useCountriesAirportsRoute} from '../../hooks/useCountriesAirportsRoute';
import {DoubleArrow} from '@material-ui/icons';
import {icon} from './Countries.styles';
import {CountryDto} from '../../api/countryApi/countryDto';

interface CountryProps {
    country: CountryDto;
}

export const Country: React.FC<CountryProps> = ({country}) => {
    const {setCountriesAirportsRoute, matchedParams} = useCountriesAirportsRoute();

    const handleClick = () => {
        setCountriesAirportsRoute(country.id);
    };

    const showIcon = matchedParams && matchedParams.id === country.id;

    return (
        <>
            <Button onClick={handleClick}>{country.name}</Button>
            {showIcon && <DoubleArrow className={icon} fontSize={'small'} />}
        </>
    );
};
