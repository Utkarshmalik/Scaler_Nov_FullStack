import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            return data; // The payload for the 'fulfilled' action
    } catch (error) {
      // The payload for the 'rejected' action
      throw new Error(`Unable to fetch posts`);
    }
} )


const postsSlice = createSlice({

    name:'posts',
    initialState : {
        data:[],
        status:'idle',
        error:null
    }, 
    reducers:{},
    extraReducers: (builder)=>{

        builder
        .addCase(fetchPosts.pending, (state,action)=>{
            state.status = "loading"
        })
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            state.status = "succeeded"
            state.data = action.payload
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status="failed";
            state.error = action.error.message
        })
    }

})

export default postsSlice.reducer;