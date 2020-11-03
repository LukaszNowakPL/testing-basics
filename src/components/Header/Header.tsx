import React from 'react';
import {headerButton, headerButtonSelected, headerContainer, headerMenu} from './Header.style';
import {NavLink, useLocation} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import Grid from '@material-ui/core/Grid/Grid';
import {HeaderUnitTestsSubmenu} from "./HeaderUnitTestsSubmenu";
import {HeaderIntegrationTestSubmenu} from "./HeaderIntegrationTestsSubmenu";

export const Header: React.FC = () => {
    const isUnitTestsRoute = useLocation().pathname.includes(ROUTES.UNIT_TESTS);
    const isIntegrationTestsRoute = useLocation().pathname.includes(ROUTES.INTEGRATION_TESTS);

    return (
        <div className={headerContainer}>
            <h1>Basic testing examples</h1>
            <Grid container className={headerMenu} spacing={2}>
                <Grid item xs={6}>
                    <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.UNIT_TESTS}>
                        Unit testing
                    </NavLink>
                </Grid>
                <Grid item xs={6}>
                    <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.INTEGRATION_TESTS}>
                        Integration testing
                    </NavLink>
                </Grid>
            </Grid>
            {isUnitTestsRoute && <HeaderUnitTestsSubmenu />}
            {isIntegrationTestsRoute && <HeaderIntegrationTestSubmenu />}
        </div>
    );
};
