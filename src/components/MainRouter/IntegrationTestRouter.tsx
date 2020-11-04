import {generatePath, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import React from 'react';
import {ComponentsIntegrationView} from '../../views/ComponentsIntegration/ComponentsIntegrationView';
import {EngineerApproachView} from '../../views/EngineerApproach/EngineerApproachView';

export const IntegrationTestRouter: React.FC = () => {
    const componentsIntegrationPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    const engineerApproachPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'engineer-approach'});
    return (
        <Switch>
            <Route path={componentsIntegrationPath}>
                <ComponentsIntegrationView />
            </Route>
            <Route path={engineerApproachPath}>
                <EngineerApproachView />
            </Route>
        </Switch>
    );
};
