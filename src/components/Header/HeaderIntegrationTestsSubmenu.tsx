import React from 'react';
import {headerButton, headerButtonSelected} from './Header.style';
import {generatePath, NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import Grid from '@material-ui/core/Grid/Grid';

export const HeaderIntegrationTestSubmenu: React.FC = () => {
    const componentsIntegrationPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    const engineerApproachPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'engineer-approach'});
    const apiTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-testing'});
    const apiWithNockTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-with-nock-testing'});

    return (
        <Grid container>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={componentsIntegrationPath}>
                    Components integration
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={engineerApproachPath}>
                    Engineer approach
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={apiTestingPath}>
                    API testing
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={apiWithNockTestingPath}>
                    Api with Nock testing
                </NavLink>
            </Grid>
        </Grid>
    );
};
