import { render, screen } from '@testing-library/react';
import MapPage from './pages/MapPage';
import React from 'react';

test('should render MapPage component', () => {
    render(<MapPage />);
    const MapPageElement = screen.getByText(/map/);

    expect(MapPageElement).toBeInTheDocument();
});
