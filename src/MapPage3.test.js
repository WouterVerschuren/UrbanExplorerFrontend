import { render, screen, waitFor } from '@testing-library/react';
import MapPage from './MapPage';

test('should load all locations correctly', async () => {
    const mockData = [
        { id: 1, latitude: 52.123, longitude: 4.567, checked: true },
        { id: 2, latitude: 53.456, longitude: 5.678, checked: false },
    ];

    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });

    render(<MapPage />);

    await waitFor(() => {
        expect(screen.getByTestId('MapPage-1')).toBeInTheDocument();
    });

    expect(screen.getAllByRole('marker')).toHaveLength(mockData.length);
});