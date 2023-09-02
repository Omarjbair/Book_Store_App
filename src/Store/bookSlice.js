import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk('book/getBooks', async (_ ,thunkApi) => {
    const {rejectWithValue } = thunkApi;
    try{
    const res = await fetch('http://localhost:3005/books');
    const data = await res.json();
    return data;
    }
    catch(error){
        return rejectWithValue(error.message);
    }
});

export const insertBooks = createAsyncThunk('book/insertBooks', async (bookData,thunkApi) => {
    const {rejectWithValue, getState } = thunkApi;
    try{
    const DataSend = {name : getState().auth.name, ...bookData};
    const res = await fetch('http://localhost:3005/books',{
        method: 'POST',
        body : JSON.stringify(DataSend),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        },
    });
    const data = await res.json();
    return data;
    }
    catch(error){
        return rejectWithValue(error.message);
    }
});

export const deleteBooks = createAsyncThunk('book/deleteBooks', async (deleteItem,thunkApi) => {
    const {rejectWithValue } = thunkApi;
    try{
        const data = await fetch(`http://localhost:3005/books/${deleteItem.id}`,{
        method: 'DELETE',
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        },
    });
        return deleteItem;
    } catch(error){
        return rejectWithValue(error.message);
    }
});

const initState = {books : [] ,isLoading : false,failed : null};
const bookSlice = createSlice({
    name:"book",
    initialState: initState,
    extraReducers: {
        // getBooks 
        [getBooks.pending] : (state,action) =>{
            state.isLoading = true;
            state.failed = null;
        },
        [getBooks.fulfilled] : (state,action) =>{
            state.isLoading = false;
            state.books = action.payload;
            state.failed = null;
        },
        [getBooks.rejected] : (state,action) =>{
            state.isLoading = false;
            state.failed = action.payload;
        },

        // insertBooks 
        [insertBooks.pending] : (state,action) => {
            state.isLoading = true;
            state.failed = null;
        },
        [insertBooks.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.books.push(action.payload);
            state.failed = null;
        },
        [insertBooks.rejected] : (state,action) => {
            state.isLoading = false;
            state.failed = action.payload;
        },

        //DeleteBooks
        [deleteBooks.pending] : (state,action) => {
            state.isLoading = true;
            state.failed = null;
        },
        [deleteBooks.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.books = state.books.filter((el) => el.id !== action.payload.id);
            state.failed = null;
        },
        [deleteBooks.rejected] : (state,action) => {
            state.isLoading = false;
            state.failed = action.payload;
        },
    }
});

export default bookSlice.reducer;
