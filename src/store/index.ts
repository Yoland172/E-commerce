import { configureStore } from "@reduxjs/toolkit"
import React from "react"
import ReactDOM from "react-dom"
import appSlice from "../components/app/appSlice";

const store = configureStore({
    reducer : {
        appState : appSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
