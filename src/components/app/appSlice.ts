import { createSlice } from "@reduxjs/toolkit";

interface appState {
    value: number,
    isOk:boolean
}

const initialState: appState = {
    value:0,
    isOk:false
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        up: state => {
            state.value +=1,
            state.isOk = true
        },
        down: state => {
            state.value -= 1,
            state.isOk = false
        },
        ok: state => {
            state.isOk = true
        }
    }
})

export const {up,down,ok} = appSlice.actions;
export default appSlice.reducer;
