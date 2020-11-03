import {Filters, FiltersGenders} from '../../helpers/types';

export const getAreFiltersProvided = (filters: Filters): boolean => {
    return (filters.names && filters.names.length > 0) || Object.keys(filters).length > 1;
};

export const getActorsLabel = (filters: Filters): string => {
    const allPart = filters.names && filters.names.length === 0 ? 'all ' : '';
    const genderPart = getGenderPart(filters.gender || '');
    const actorPart = getActorPart(filters);

    // allPart => [all ]*
    // genderPart => [male |female |'']
    // actorPart => [actor|actors|actress|actresses|actor or actress|actors and actresses]
    return `${allPart}${genderPart}${actorPart}`;
};

const getGenderPart = (gender: FiltersGenders | ''): string => {
    switch (gender) {
        case FiltersGenders.MALE:
            return 'male ';
        case FiltersGenders.FEMALE:
            return 'female ';
        default:
            return '';
    }
};

const getActorPart = (filters: Filters): string => {
    if (filters.names && filters.names.length === 1) {
        switch (filters.gender) {
            case FiltersGenders.MALE:
                return 'actor';
            case FiltersGenders.FEMALE:
                return 'actress';
            default:
                return 'actor or actress';
        }
    }
    switch (filters.gender) {
        case FiltersGenders.MALE:
            return 'actors';
        case FiltersGenders.FEMALE:
            return 'actresses';
        default:
            return 'actors and actresses';
    }
};

export const getCommaPart = (itemNo: number, total: number): string => {
    if (itemNo === 0) {
        return '';
    }

    if (itemNo + 1 === total) {
        return ' and';
    }

    return ' ,';
};
