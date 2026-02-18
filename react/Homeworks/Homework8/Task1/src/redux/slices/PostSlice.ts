import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {fetchData} from "../../services/api.service.ts";
import type {IPost} from "../../models/IPost.ts";


const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI) => {
    const posts = await fetchData<IPost[]>('/posts')
    return thunkAPI.fulfillWithValue(posts)
})

type postSliceType = {
    posts: IPost[];
}

const initPostSliceState: postSliceType = {posts: []};

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    })
})

export const postActions = {...postSlice.actions, loadPosts}