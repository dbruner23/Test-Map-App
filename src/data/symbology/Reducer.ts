import { createSlice, createSelector } from '@reduxjs/toolkit'
import { initialSymbologyState } from './State'
import colorbrewer from 'colorbrewer'
import { getColorBrewerFromString } from '../../Views/Helpers'

const SymbologySlice = createSlice({
    name: 'symbology',
    initialState: initialSymbologyState,
    reducers: {
        setColorScheme: (state, action) => {
            state.colorScheme = action.payload
        }
    }
})

export const SymbologActions = SymbologySlice.actions

export const colorSchemeState = (state: any) => state.symbology.colorScheme
export const colorscaleState = createSelector(colorSchemeState, (colorScheme) => {
    return getColorBrewerFromString(colorScheme)
})

export default SymbologySlice.reducer