import React from 'react';
import MapComponent from '../Views/MapComponent';
import { render, screen } from '@testing-library/react';

describe('MapComponent', () => {
    it('displays a loading spinner when loading', () => {
        render(<MapComponent />);

        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    })



})