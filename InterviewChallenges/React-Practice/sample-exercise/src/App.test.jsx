import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', async () => {
    it('renders App component', () => {
        render(<App />);
        screen.debug();
    });

    it('Header to be in the Document', () => {
        render(<App />);
        expect(screen.getByText(/Palindrome/)).toBeInTheDocument();
    });

    it('Input to be in the Document', () => {
        render(<App />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('Displays Header', async () => {
        // ARRANGE
        render(<App />);

        // ACT
        screen.getByRole('heading');

        // ASSERT
        expect(screen.getByRole('heading')).toHaveTextContent('Palindrome Checker');
        expect(screen.getByRole('button')).toBeDisabled();
    });
});

describe('Something to be truthy and falsly', () => {
    it('one to be true', () => {
        expect(true).toBe(true);
    });

    it('zero to be false', () => {
        expect(false).toBe(false);
    });
});
