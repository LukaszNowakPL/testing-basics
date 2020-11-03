import React from 'react';
import {Button} from "@material-ui/core";
import {useFormikContext} from "formik";

export const SearchCriteriaButtons: React.FC = () => {

    const {dirty} = useFormikContext();

    const isDisabled = !dirty;

    return (
        <Button variant={'contained'} color={'primary'} disabled={isDisabled} type={'submit'}>Search</Button>
    );
};
