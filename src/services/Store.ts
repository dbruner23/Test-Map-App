import { configureStore } from '@reduxjs/toolkit'
import SymbologyReducer from '../data/symbology/Reducer'

const store = configureStore({
    reducer: {
        symbology: SymbologyReducer
    }
})

export default store;