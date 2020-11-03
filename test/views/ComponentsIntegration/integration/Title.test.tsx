import React from 'react';
import {Title} from '../../../../src/views/ComponentsIntegration/components/Title/Title';
import {render} from '@testing-library/react';

describe('Title', () => {
    it('renders component', async () => {
        const {getByText, getAllByText, findByText, queryByText, getByRole} = render(<Title />);

        // Checks if it instantly is in the document
        expect(getByText('Todo list')).toBeInTheDocument();

        // Checks all elements that instantly are in the document
        expect(getAllByText('Todo list')).toHaveLength(1);

        // Waits 5000ms for element to be in the document (good for appearance depending on some action)
        expect(await findByText('Todo list')).toBeInTheDocument();

        // Looks if element is on the document (good for negative checking)
        expect(await queryByText('Todo list')).toBeInTheDocument();

        // Negative checking example
        expect(await queryByText('Not found text on application')).not.toBeInTheDocument();

        // Checks it it instantly is in the document - selecting by role
        expect(getByRole('heading', {name: /todo list/i})).toBeInTheDocument();
    });
});
