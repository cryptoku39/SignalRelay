// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SignalRelay title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SignalRelay/i);
    expect(titleElement).toBeInTheDocument();
});
