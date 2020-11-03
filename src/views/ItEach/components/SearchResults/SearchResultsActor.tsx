import React from 'react';
import {Typography} from '@material-ui/core';
import {getCommaPart} from "./SearchResults.helpers";

interface SearchResultsActorProps {
    name: string;
    itemNo: number;
    totalAmount: number;
}

export const SearchResultsActor: React.FC<SearchResultsActorProps> = ({name, itemNo, totalAmount}) => {

    const commaPart = getCommaPart(itemNo, totalAmount);

    return (
        <>
            {commaPart}{' '}
            <Typography variant={'subtitle2'} component={'span'}>
                {name}
            </Typography>
        </>
    );
};
