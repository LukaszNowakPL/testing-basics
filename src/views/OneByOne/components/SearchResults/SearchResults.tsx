import React from 'react';
import {Filters} from '../../helpers/types';
import {SearchResultsNoFilters} from './SearchResultsNoFilters';
import {getActorsLabel, getAreFiltersProvided} from './SearchResults.helpers';
import {Card, CardContent, Typography} from '@material-ui/core';
import {infoBox} from './SearchResults.styles';
import {SearchResultsAges} from './SearchResultsAges';
import {SearchResultsActor} from './SearchResultsActor';

interface SearchResultsProps {
    filters: Filters;
}

export const SearchResults: React.FC<SearchResultsProps> = ({filters}) => {
    const areFiltersProvided = getAreFiltersProvided(filters);

    if (!areFiltersProvided) {
        return <SearchResultsNoFilters />;
    }

    const actorsLabel = getActorsLabel(filters);
    const shouldShowAges = filters.ageFrom || filters.ageTo;
    const totalAmount = (filters.names && filters.names.length) || 0;

    return (
        <Card className={infoBox}>
            <CardContent>
                <Typography variant={'subtitle2'} component={'span'}>
                    Search results for
                </Typography>{' '}
                {actorsLabel}
                {':'}
                {filters.names &&
                    filters.names.map((name, idx) => <SearchResultsActor key={name} name={name} itemNo={idx} totalAmount={totalAmount} />)}
                {shouldShowAges && <SearchResultsAges filters={filters} />}
            </CardContent>
        </Card>
    );
};
