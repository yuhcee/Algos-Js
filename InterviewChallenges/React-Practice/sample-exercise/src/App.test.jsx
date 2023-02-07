import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
describe('App', async () => {
    it('renders App component', () => {
        render(<App />);
        // screen.debug();
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
    });

    it('Button is disabled', async () => {
        render(<App />);

        expect(screen.queryByText(/That's right!/)).toBeNull();
        fireEvent.click(screen.getByRole('button'));

        await waitFor(() => screen.getByText('Submit'));
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('Changes input value', async () => {
        const user = userEvent.setup();
        render(<App />);
        screen.debug();
        expect(screen.queryByText(/That's right!/)).toBeNull();

        fireEvent.change(screen.getByLabelText(/Enter word/), {
            target: { value: 'mom' },
        });
        await user.type(screen.getByRole('textbox'), 'mom');

        expect(screen.getByRole('button')).toBeTruthy();
    });

    it('type', async () => {
        const user = userEvent.setup();
        render(<App />);
        await user.type(screen.getByRole('textbox'), 'mom');

        expect(screen.getByRole('textbox')).toHaveValue('mom');
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
