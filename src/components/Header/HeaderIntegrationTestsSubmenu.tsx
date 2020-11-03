import React from 'react';
import {headerButton, headerButtonSelected} from './Header.style';
import {generatePath, NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import Grid from '@material-ui/core/Grid/Grid';

export const HeaderIntegrationTestSubmenu: React.FC = () => {
    const componentsIntegrationPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'components-integration'});
    const badExamplePath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'bad-example'});
    const apiTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'api-testing'});
    const mswTestingPath = generatePath(ROUTES.INTEGRATION_TEST_EXAMPLE, {id: 'msw-testing'});

    return (
        <Grid container>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={componentsIntegrationPath}>
                    Components integration
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={badExamplePath}>
                    Bad example
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={apiTestingPath}>
                    API testing
                </NavLink>
            </Grid>
            <Grid item xs={3}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={mswTestingPath}>
                    msw
                </NavLink>
            </Grid>
        </Grid>
    );
};
