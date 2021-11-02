import { createSlice } from "@reduxjs/toolkit";
import { Permission, User } from "@types";

export interface AuthState {
    user?: User,
    permissions?: Permission,
    role?: string
}


const initialState: AuthState = {}

export const { reducer: authReducer } = createSlice({
    initialState,
    name: 'auth',
    reducers: {}
})