import React from "react";
import {Form, Formik} from "formik";
import {Filters} from "../../helpers/types";
import {SearchCriteriaActor} from "./SearchCriteriaActor";
import {Grid} from "@material-ui/core";
import {SearchCriteriaAge} from "./SearchCriteriaAge";
import {SearchCriteriaGender} from "./SearchCriteriaGender";
import {SearchCriteriaButtons} from "./SearchCriteriaButtons";

interface SearchCriteriaProps {
    filters: Filters,
    onSubmit: (filters: Filters) => void,
}

export const SearchCriteria: React.FC<SearchCriteriaProps> = ({filters, onSubmit}) => {
    return (<Formik initialValues={filters} onSubmit={onSubmit} enableReinitialize={true}>
        <Form>
            <Grid container spacing={2}>
                <SearchCriteriaActor />
                <SearchCriteriaAge />
                <SearchCriteriaGender />
            </Grid>
            <SearchCriteriaButtons />
        </Form>
    </Formik>)
};