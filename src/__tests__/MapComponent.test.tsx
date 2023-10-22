import React from 'react';
import MapComponent from '../Views/MapComponent';
import { render, screen, waitFor } from '@testing-library/react';
jest.mock("@arcgis/core/WebMap");
jest.mock("@arcgis/core/views/MapView");
jest.mock("@arcgis/core/widgets/Legend");

describe('MapComponent', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders MapComponent without errors', () => {
        render(<MapComponent />);
    });
    
    it('displays a loading spinner when loading', async () => {
        const { getByTestId } = render(<MapComponent />);
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    })

    it('renders the map container after loading', async () => {
        const { getByTestId } = render(<MapComponent />);
        await waitFor(() => {
            expect(screen.getByTestId('map-container')).toBeInTheDocument();
        });
    });

})