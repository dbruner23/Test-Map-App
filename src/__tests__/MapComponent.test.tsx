import React from 'react';
import MapComponent from '../Views/MapComponent';
import { render, screen, waitFor, renderHook, act } from '@testing-library/react';
import { buildMap } from '../Views/Helpers';

describe('MapComponent', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders MapComponent without crashing', () => {
        render(<MapComponent />);
    });
    
    it('displays a loading spinner when loading', async () => {
        render(<MapComponent />);
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    })

    it('renders the map container after loading', async () => {
        render(<MapComponent />);
        await waitFor(() => {
            expect(screen.getByTestId('map-container')).toBeInTheDocument();
        });
    });
    
})