import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

import {axios} from "Configs/ApiConfig";
import Api from "Constatns/Api";

export interface AppState {
    isLoading: boolean;
    animations: any[];
    page: number;
    sortby: string;
};

const initialState: AppState = {
    isLoading: false,
    animations: [],
    page: 1,
    sortby: ""
};

export const getData = async (page?: number, sortby?: string) => {
    try {   
        const {data} = await axios({method: "GET", url: `${Api.ReviewsCategory}animations`, params: {page, sortby}});
        return Promise.resolve(data);
    } catch (err) { 
        return Promise.resolve([]);
    };
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        getAnimations: (state, action: PayloadAction<any>) => {
            state.page ++;
            state.animations = !action.payload.isFilter ? [...state.animations, ...action.payload.animations] : action.payload.animations;
        }
    }
});

export const {getAnimations, toggleLoading} = appSlice.actions;

export default appSlice.reducer;