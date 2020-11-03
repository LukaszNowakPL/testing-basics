import {getValuesToChange} from "../../../../../src/views/ItEach/components/SearchCriteria/SearchCriteria.helpers";

describe('SearchCriteria.helpers', () => {

    describe('getValuesToChange', () => {

        it.each`
            field           |value      |values             |result
            ${'ageFrom'}    |${'1'}     |${{}}              |${[{field: 'ageFrom', value: '1'}]}
            ${'ageFrom'}    |${'1'}     |${{ageTo: 2}}      |${[{field: 'ageFrom', value: '1'}]}
            ${'ageTo'}      |${'10'}    |${{}}              |${[{field: 'ageTo', value: '10'}]}
            ${'ageTo'}      |${'10'}    |${{ageFrom: 2}}    |${[{field: 'ageTo', value: '10'}]}
            ${'ageFrom'}    |${'10'}    |${{ageTo: 2}}      |${[{field: 'ageFrom', value: '10'}, {field: 'ageTo', value: '10'}]}
            ${'ageTo'}      |${'10'}    |${{ageFrom: 12}}   |${[{field: 'ageTo', value: '10'}, {field: 'ageFrom', value: '10'}]}
        `('returns $result for field: $field, value: $value and filters: $values', ({field, value, values, result}) => {
            expect(getValuesToChange(field, value, values)).toEqual(result);
        })

    })

});