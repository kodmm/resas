import { configureStore } from '@reduxjs/toolkit';
import { prefecturesReducer } from './features/prefectures/prefecturesSlice'
const store = configureStore({
    reducer: {
        prefectures: prefecturesReducer,
    }
})

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch