import { createSlice } from '@reduxjs/toolkit';

const initState = {isLogin : false , name : "Omar"};

const authSlice = createSlice({
    name : "auth",
    initialState: initState,
    reducers : {
        logInOut : (state) => {
            state.isLogin = !state.isLogin;
        },
    }
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
