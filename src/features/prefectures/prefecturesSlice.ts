import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface PrefecturesState {
    prefCode: number,
    prefName: string,   
}

const initialState = [] as PrefecturesState[]

const prefecturesSlice = createSlice({
    name: 'prefectures',
    initialState,
    reducers: {
        setPrefectures: (state, action: PayloadAction<PrefecturesState[]>) => {
            state.push(...action.payload)
        }
    }
})

export const { setPrefectures } = prefecturesSlice.actions
export const prefecturesReducer = prefecturesSlice.reducer
export const selectPrefectures = (state: RootState) => state.prefectures
