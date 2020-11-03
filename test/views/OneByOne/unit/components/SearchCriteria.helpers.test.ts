import {getValuesToChange} from "../../../../../src/views/OneByOne/components/SearchCriteria/SearchCriteria.helpers";

describe('SearchCriteria.helpers', () => {

    describe('getValuesToChange', () => {

        it('returns given ageFrom values because ageTo is undefined', () => {
            expect(getValuesToChange('ageFrom', '1', {})).toEqual([{field: 'ageFrom', value: '1'}]);
        });

        it('returns given ageFrom values because ageTo is higher than ageFrom', () => {
            expect(getValuesToChange('ageFrom', '1', {ageTo: 2})).toEqual([{field: 'ageFrom', value: '1'}]);
        });

        it('returns given ageFrom values because ageTo is undefined', () => {
            expect(getValuesToChange('ageTo', '10', {})).toEqual([{field: 'ageTo', value: '10'}]);
        });

        it('returns given ageTo values because ageFrom is lower than ageTo', () => {
            expect(getValuesToChange('ageTo', '10', {ageFrom: 2})).toEqual([{field: 'ageTo', value: '10'}]);
        });

        it('returns given ageFrom with shifted ageTo values because ageTo was lower than ageFrom', () => {
            expect(getValuesToChange('ageFrom', '10', {ageTo: 2})).toEqual([{field: 'ageFrom', value: '10'}, {field: 'ageTo', value: '10'}]);
        });

        it('returns given ageTo with shifted ageFrom values because ageFrom was higher than ageTo', () => {
            expect(getValuesToChange('ageTo', '10', {ageFrom: 12})).toEqual([{field: 'ageTo', value: '10'}, {field: 'ageFrom', value: '10'}]);
        });

    })

});