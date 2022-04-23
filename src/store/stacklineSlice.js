import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const stacklineSlice = createSlice({
    name: 'stacklineState',
    initialState,

    reducers: {}
});


export const { } = stacklineSlice.actions;

export default stacklineSlice.reducer;