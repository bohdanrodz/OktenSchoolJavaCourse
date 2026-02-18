import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import {fetchData} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[];
}

export const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await fetchData<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users)
})

const initUserSliceState: UserSliceType = {users: []};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
    })
})

export const userActions = {...userSlice.actions, loadUsers};