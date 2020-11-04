import React from 'react';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {ROUTES} from '../../src/helpers/routes';

export const renderWithRouter = (ui: React.ReactNode, entries?: string[], path?: ROUTES) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(
        <Router history={history}>
            <Route path={path ? path : '/'}>{ui}</Route>
        </Router>,
    );
    return {...renderResult, history};
};
