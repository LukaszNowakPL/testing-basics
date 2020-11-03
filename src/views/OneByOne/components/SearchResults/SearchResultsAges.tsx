import React from 'react';
import {Filters} from '../../helpers/types';
import {Typography} from '@material-ui/core';

interface SearchResultsAgesProps {
    filters: Filters;
}

export const SearchResultsAges: React.FC<SearchResultsAgesProps> = ({filters}) => {
    return (
        <>
            {' '}
            age:
            <Typography variant={'subtitle2'} component={'span'}>
                {filters.ageFrom && ` from ${filters.ageFrom}`}
                {filters.ageTo && ` up to ${filters.ageTo}`}
            </Typography>
        </>
    );
};
