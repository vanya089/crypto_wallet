import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    name: null,
    email: null,
    address: null,
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.name = action.payload;
        },
        setUserEmail(state, action) {
            state.email = action.payload;
        },
        setUserAddress(state, action) {
            state.address = action.payload;
        },
    },
});

export const addressSelector = (state) => state.users.address;

export const {setUserName, setUserEmail, setUserAddress} = usersSlice.actions;

export default usersSlice.reducer