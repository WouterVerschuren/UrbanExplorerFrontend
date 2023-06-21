import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import AddLocation from './AddLocation';

test('location submission', async () => {
    render(<AddLocation />);

    const nameInput = screen.getByPlaceholderText('name');
    const longitudeInput = screen.getByPlaceholderText('Longitude');
    const latitudeInput = screen.getByPlaceholderText('Latitude');
    const informationInput = screen.getByRole('textbox');

    fireEvent.change(nameInput, { target: { value: 'Test Location' } });
    fireEvent.change(longitudeInput, { target: { value: '123.456' } });
    fireEvent.change(latitudeInput, { target: { value: '78.901' } });
    fireEvent.change(informationInput, { target: { value: 'Test information about the location' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => screen.getByText('Location added'));

    expect(screen.getByText('Location added')).toBeInTheDocument();
});