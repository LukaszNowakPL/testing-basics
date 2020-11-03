import React from 'react';
import {headerButton, headerButtonSelected} from './Header.style';
import {generatePath, NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import Grid from '@material-ui/core/Grid/Grid';

export const HeaderUnitTestsSubmenu: React.FC = () => {
    const oneByOnePath = generatePath(ROUTES.UNIT_TEST_EXAMPLE, {id: '1-by-1'});
    const itEachPath = generatePath(ROUTES.UNIT_TEST_EXAMPLE, {id: 'it-each'});

    return (
        <Grid container>
            <Grid item xs={6}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={oneByOnePath}>
                    1-by-1 example
                </NavLink>
            </Grid>
            <Grid item xs={6}>
                <NavLink className={headerButton} activeClassName={headerButtonSelected} to={itEachPath}>
                    it.each example
                </NavLink>
            </Grid>
        </Grid>
    );
};
