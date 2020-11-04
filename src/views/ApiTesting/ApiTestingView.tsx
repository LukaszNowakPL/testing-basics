import React from 'react';
import {Title} from './components/Title/Title';
import {generatePath, Redirect, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import {Countries} from './components/Countries/Countries';

export const ApiTestingView: React.FC = () => {
    const apiTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-testing'});
    return (
        <section>
            <Title />
            <Switch>
                <Route path={apiTestingPath} exact>
                    <Redirect to={ROUTES.API_TESTING_COUNTRIES} />
                </Route>
                <Route path={ROUTES.API_TESTING_COUNTRIES}>
                    <Countries />
                </Route>
            </Switch>
        </section>
    );
};
