import React, {useState} from "react";
import {SearchCriteria} from "../SearchCriteria/SearchCriteria";
import {SearchResults} from "../SearchResults/SearchResults";
import {Filters} from "../../helpers/types";

export const SearchForm: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({names: []});

    return (<>
            <SearchCriteria filters={filters} onSubmit={setFilters} />
            <SearchResults filters={filters} />
        </>)
};