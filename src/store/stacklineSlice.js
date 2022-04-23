import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const stacklineSlice = createSlice({
    name: 'stacklineState',
    initialState,

    reducers: {}
});

export const ninjaImage = (state) => state.stacklineState.image;
export const getTitle = (state) => state.stacklineState.title;
export const getSubtitle = (state) => state.stacklineState.subtitle;
export const getTags = (state) => state.stacklineState.tags;

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