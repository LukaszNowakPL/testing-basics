import React, {ChangeEvent} from 'react';
import {actors} from '../../helpers/constants';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Grid} from '@material-ui/core';
import {useField} from 'formik';

export const SearchCriteriaActor: React.FC = () => {
    const fieldHook = useField('names');
    const [field] = fieldHook;
    const {value} = field;
    const {setValue} = fieldHook[2];

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = ev.target;
        const filteredActors = value.filter((actor: string) => actor !== name);
        if(checked) {
            setValue([...filteredActors, name])
        } else {
            setValue(filteredActors)
        }
    };

    return (
        <Grid item xs={4}>
            <FormGroup onChange={handleChange}>
                <FormLabel component='legend'>Actors</FormLabel>
                {actors.map((actor, idx) => <FormControlLabel key={idx} control={<Checkbox checked={field.value.includes(actor)} name={actor}/>} label={actor}/>)}
            </FormGroup>
        </Grid>
    );
};
