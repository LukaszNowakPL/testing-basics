import React from 'react';
import {Title} from './components/Title/Title';
import {generatePath, Redirect, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import {Countries} from './components/Countries/Countries';

export const ApiWithNockTestingView: React.FC = () => {
    const apiWithNockTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-with-nock-testing'});
    return (
        <section>
            <Title />
            <Switch>
                <Route path={apiWithNockTestingPath} exact>
                    <Redirect to={ROUTES.API_WITH_NOCK_TESTING_COUNTRIES} />
                </Route>
                <Route path={ROUTES.API_WITH_NOCK_TESTING_COUNTRIES}>
                    <Countries />
                </Route>
            </Switch>
        </section>
    );
};
