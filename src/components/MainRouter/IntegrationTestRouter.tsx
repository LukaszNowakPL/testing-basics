import {generatePath, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import React from 'react';
import {ComponentsIntegrationView} from '../../views/ComponentsIntegration/ComponentsIntegrationView';
import {EngineerApproachView} from '../../views/EngineerApproach/EngineerApproachView';
import {ApiTestingView} from '../../views/ApiTesting/ApiTestingView';
import {ApiWithNockTestingView} from "../../views/ApiWithNockTesting/ApiWithNockTestingView";

export const IntegrationTestRouter: React.FC = () => {
    const componentsIntegrationPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    const engineerApproachPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'engineer-approach'});
    const apiTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-testing'});
    const apiWithNockTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-with-nock-testing'});
    return (
        <Switch>
            <Route path={componentsIntegrationPath}>
                <ComponentsIntegrationView />
            </Route>
            <Route path={engineerApproachPath}>
                <EngineerApproachView />
            </Route>
            <Route path={apiTestingPath}>
                <ApiTestingView />
            </Route>
            <Route path={apiWithNockTestingPath}>
                <ApiWithNockTestingView />
            </Route>
        </Switch>
    );
};
