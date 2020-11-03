import {generatePath, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import React from 'react';
import {ComponentsIntegrationView} from '../../views/ComponentsIntegration/ComponentsIntegrationView';

export const IntegrationTestRouter: React.FC = () => {
    const componentsIntegrationPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    return (
        <Switch>
            <Route path={componentsIntegrationPath}>
                <ComponentsIntegrationView />
            </Route>
        </Switch>
    );
};
