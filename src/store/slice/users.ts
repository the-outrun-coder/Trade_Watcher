import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	users: [],
	error: ''
};

// NOTE - Generates pending, fulfilled, or rejeted action cases 
const fetchUsers = createAsyncThunk('users/fetchAll', () => {
	// TODO - CREATE ENVIRONMENT CONFIG FOR API URIs 
	return axios.get('https://jsonplaceholder.typicode.com/users')
		.then((response) => { 
			return response.data
		});
});

///

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {}
});

export default userSlice.reducer;