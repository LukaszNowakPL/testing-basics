import {generatePath, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import React from 'react';
import {OneByOneView} from '../../views/OneByOne/OneByOneView';

export const UnitTestRouter: React.FC = () => {
    const oneByOnePath = generatePath(ROUTES.UNIT_TEST_EXAMPLE, {id: '1-by-1'});
    return (
        <Switch>
            <Route path={oneByOnePath}>
                <OneByOneView />
            </Route>
        </Switch>
    );
};
