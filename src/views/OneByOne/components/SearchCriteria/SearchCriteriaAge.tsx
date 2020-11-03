import React from 'react';
import {useField, useFormikContext} from 'formik';
import {Filters} from '../../helpers/types';
import {getValuesToChange} from "./SearchCriteria.helpers";
import {FormLabel, Grid, TextField} from "@material-ui/core";
import {CustomNumberFormat} from "../../../../components/CustomNumberFormat/CustomNumberFormat";

export const SearchCriteriaAge: React.FC = () => {
    const {setFieldValue} = useFormikContext<Filters>();

    const [{value: ageFrom, ...ageFromField}] = useField('ageFrom');
    const [{value: ageTo, ...ageToField}] = useField('ageTo');

    const handleBlur = (field: 'ageFrom' | 'ageTo', value: string) => {
        const valuesToChange = getValuesToChange(field, value, {ageFrom, ageTo});
        valuesToChange.forEach((valueToChange) => {
            setFieldValue(valueToChange.field, valueToChange.value)
        })
    };

    return (
        <Grid item xs={4}>
            <FormLabel component='legend'>Age</FormLabel>
            <TextField
                {...ageFromField}
                label="from"
                value={ageFrom}
                InputProps={{
                    inputComponent: CustomNumberFormat,
                }}
                onBlur={e => handleBlur('ageFrom', e.target.value)}
                size={'small'}
            />
            <TextField
                {...ageToField}
                label="to"
                value={ageTo}
                InputProps={{
                    inputComponent: CustomNumberFormat,
                }}
                onBlur={e => handleBlur('ageTo', e.target.value)}
                size={'small'}
            />
        </Grid>
    );
};
