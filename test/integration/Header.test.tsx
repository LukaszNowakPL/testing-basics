import React from 'react';
import {Header} from '../../src/components/Header/Header';
import {renderWithRouter} from '../_helpers/renderWithRouters';

describe('Header', () => {
    it('renders component', async () => {
        const {getByRole, queryByRole} = renderWithRouter(<Header />);

        expect(getByRole('heading', {name: /basic testing examples/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /unit testing/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /integration testing/i})).toBeInTheDocument();

        expect(queryByRole('link', {name: /1-by-1 example/i})).not.toBeInTheDocument();
    });

    it('renders unit testing submenu when on /unit-tests route', () => {
        const {getByRole} = renderWithRouter(<Header />, ['/unit-tests']);
        expect(getByRole('link', {name: /1-by-1 example/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /it.each example/i})).toBeInTheDocument();
    });

    it('renders integration testing submenu when on /integration-tests route', () => {
        const {getByRole} = renderWithRouter(<Header />, ['/integration-tests']);
        expect(getByRole('link', {name: /components integration/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /engineer approach/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /api testing/i})).toBeInTheDocument();
        expect(getByRole('link', {name: /msw/i})).toBeInTheDocument();
    });
});
