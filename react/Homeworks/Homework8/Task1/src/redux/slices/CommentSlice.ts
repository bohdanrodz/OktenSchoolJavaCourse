import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { IComment } from "../../models/IComment";
import {fetchData} from "../../services/api.service.ts";


type CommentSliceType = {
    comments: IComment[];
}

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await fetchData<IComment[]>('/comments')
    return thunkAPI.fulfillWithValue(comments)
})

const initCommentSliceState:CommentSliceType = {comments: []};
export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
        state.comments = action.payload;
    })
})

export const commentActions = {...commentSlice.actions, loadComments}