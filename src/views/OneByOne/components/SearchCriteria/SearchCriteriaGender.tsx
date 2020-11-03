import React from 'react';
import {useField} from 'formik';
import {FiltersGenders} from '../../helpers/types';
import {FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";

export const SearchCriteriaGender: React.FC = () => {
    const [genderField] = useField('gender');

    return (
        <Grid item xs={4}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup {...genderField} >
                <FormControlLabel value={FiltersGenders.FEMALE} control={<Radio />} label="Female" />
                <FormControlLabel value={FiltersGenders.MALE} control={<Radio />} label="Male" />
            </RadioGroup>
        </Grid>
    );
};
