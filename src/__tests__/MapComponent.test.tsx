import React from 'react';
import MapComponent from '../Views/MapComponent';
import { render, screen } from '@testing-library/react';
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
    
    it('displays a loading spinner when loading', () => {
        const { getByTestId } = render(<MapComponent />);
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    })

    it('renders the map container after loading', () => {
        const { getByTestId } = render(<MapComponent />);
        expect(screen.getByTestId('map-container')).toBeInTheDocument();
    });

    // test('sets error state when there is an error', () => {
    //     const { getByTestId } = render(<MapComponent />);

    //     // Assert that the error message is displayed
    //     expect(getByTestId('error-text')).toBeInTheDocument();
    // });


})