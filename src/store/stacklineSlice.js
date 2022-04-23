import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const stacklineSlice = createSlice({
    name: 'stacklineState',
    initialState,

    reducers: {}
});

export const productInfo = (state) => {
    return { 
        title: state.stacklineState.title,
        image: state.stacklineState.image,
        subtitle: state.stacklineState.subtitle,
        tags: state.stacklineState.tags
    }

}


export const {  } = stacklineSlice.actions;

export default stacklineSlice.reducer;