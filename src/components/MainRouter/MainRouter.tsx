import {generatePath, Redirect, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';
import React from 'react';
import {UnitTestRouter} from './UnitTestRouter';
import {IntegrationTestRouter} from './IntegrationTestRouter';

export const MainRouter: React.FC = () => {
    const unitTestsStartingPage = generatePath(ROUTES.UNIT_TEST_EXAMPLE, {id: '1-by-1'});
    const integrationTestsStartingPage = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    return (
        <Switch>
            <Route path={'/'} exact>
                <Redirect to={unitTestsStartingPage} />
            </Route>
            <Route path={ROUTES.UNIT_TEST_EXAMPLE}>
                <UnitTestRouter />
            </Route>
            <Route path={ROUTES.UNIT_TESTS}>
                <Redirect to={unitTestsStartingPage} />
            </Route>
            <Route path={ROUTES.INTEGRATION_TEST_EXAMPLE}>
                <IntegrationTestRouter />
            </Route>
            <Route path={ROUTES.INTEGRATION_TESTS}>
                <Redirect to={integrationTestsStartingPage} />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};
