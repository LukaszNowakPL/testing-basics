import {Filters} from "../../helpers/types";

interface ValueToChange {
    field: string,
    value: string,
}

export const getValuesToChange = (field: 'ageFrom' | 'ageTo', value: string, values: Filters): ValueToChange[] => {
    const valuesToChange = [{field, value}];

    if(value) {
        if(field === 'ageFrom' && Number(value) > Number(values?.ageTo)) {
            valuesToChange.push({field: 'ageTo', value})
        }
        if(field === 'ageTo' && Number(value) < Number(values?.ageFrom)) {
            valuesToChange.push({field: 'ageFrom', value})
        }
    }

    return valuesToChange;
};