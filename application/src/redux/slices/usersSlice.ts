import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type UserType = {
    name: string;
    email: string;
    address: string;
}


const initialState: UserType = {
    name: '',
    email: '',
    address: '',
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

export const nameSelector = (state: RootState) => state.users.name;
export const emailSelector = (state: RootState) => state.users.email;
export const addressSelector = (state: RootState) => state.users.address;

export const {setUserName, setUserEmail, setUserAddress} = usersSlice.actions;

export default usersSlice.reducer