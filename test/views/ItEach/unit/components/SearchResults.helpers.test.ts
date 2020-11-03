import {FiltersGenders} from '../../../../../src/views/OneByOne/helpers/types';
import {
    getActorsLabel,
    getAreFiltersProvided,
    getCommaPart,
} from '../../../../../src/views/OneByOne/components/SearchResults/SearchResults.helpers';

describe('SearchResults.helpers', () => {
    describe('getAreFiltersProvided', () => {
        it('returns true because any name is provided', () => {
            expect(getAreFiltersProvided({names: ['First actor']})).toBeTruthy();
        });

        it('returns true because some none name filter is provided', () => {
            expect(getAreFiltersProvided({names: [], ageFrom: 12})).toBeTruthy();
        });

        it('returns false because name filter is empty and no other is provided', () => {
            expect(getAreFiltersProvided({names: []})).toBeFalsy();
        });
    });

    describe('getActorsLabel', () => {
        it('returns all actors and actresses', () => {
            expect(getActorsLabel({names: []})).toEqual('all actors and actresses');
        });

        it('returns all male actors', () => {
            expect(getActorsLabel({names: [], gender: FiltersGenders.MALE})).toEqual('all male actors');
        });

        it('returns all female actresses', () => {
            expect(getActorsLabel({names: [], gender: FiltersGenders.FEMALE})).toEqual('all female actresses');
        });

        it('returns actor or actress', () => {
            expect(getActorsLabel({names: ['First actor']})).toEqual('actor or actress');
        });

        it('returns male actor', () => {
            expect(getActorsLabel({names: ['First actor'], gender: FiltersGenders.MALE})).toEqual('male actor');
        });

        it('returns female actress', () => {
            expect(getActorsLabel({names: ['First actress'], gender: FiltersGenders.FEMALE})).toEqual('female actress');
        });

        it('returns actors and actresses', () => {
            expect(getActorsLabel({names: ['First actor', 'Second actor']})).toEqual('actors and actresses');
        });

        it('returns male actors', () => {
            expect(getActorsLabel({names: ['First actor', 'Second actor'], gender: FiltersGenders.MALE})).toEqual('male actors');
        });

        it('returns female actresses', () => {
            expect(getActorsLabel({names: ['First actress', 'Second actor'], gender: FiltersGenders.FEMALE})).toEqual('female actresses');
        });
    });

    describe('getCommaPart', () => {
        it('returns empty string because of first item', () => {
            expect(getCommaPart(0, 10)).toBe('');
        });

        it('returns " and" string because of last item', () => {
            expect(getCommaPart(9, 10)).toBe(' and');
        });

        it('returns " ," string because of any between first and last items', () => {
            expect(getCommaPart(4, 10)).toBe(' ,');
        });
    });
});
