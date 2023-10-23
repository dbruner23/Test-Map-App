import React, { useState, useEffect, useRef } from 'react'
import Styles from './MapComponent.module.css'
import { buildMap } from './Helpers';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux'
import { colorscaleState } from '../data/symbology/Reducer';

const MapComponent = () => {
    const colorscale = useSelector(colorscaleState)
    const mapRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const setSuccessState = (): void => {
        setIsLoading(false);
        setIsError(false);
    }

    const setErrorState = (): void => {
        setIsLoading(false);
        setIsError(true);
    }

    useEffect(() => {
        setIsLoading(true);

        if (mapRef.current) {
            buildMap(setSuccessState, setErrorState, colorscale);
        }
    }, [colorscale]);

    return (
        <div>
            {isLoading &&
                <div className={Styles.mainContainer}>
                    <CircularProgress data-testid="loading-spinner" className={Styles.loading} />
                    <div id="loading-text">
                        <p>Loading map...</p>
                    </div>
                </div>
            }
            {isError &&
                <div data-testid="error-text" className={Styles.mainContainer}>
                    <p>Something went wrong with loading the map. Please try again later.</p>
                </div>
            }
            <div className={Styles.instructions}>Click a parcel to see data</div>
            <div ref={mapRef} data-testid="map-container" id="map-container" style={{ height: "85vh", cursor: "pointer" }} />
        </div>
    )
}

export default MapComponent