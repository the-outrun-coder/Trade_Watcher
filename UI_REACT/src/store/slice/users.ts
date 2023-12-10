import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// TODO - Build a User object interface

interface USER_STATE {
	loading: boolean,
	users: Array<undefined>, // TODO <
	error: string
}

const initialState: USER_STATE = {
	loading: false,
	users: [],
	error: ''
};

// NOTE - Generates pending, fulfilled, or rejeted action cases 
export const fetchUsers = createAsyncThunk('users/fetchAll', () => {
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
	reducers: {},
	extraReducers: (builder) => {
		// PENDING
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true
		});
		// REJECTED
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.users = [];
			state.error = action.error.message || 'Collecting user data failed';
		})
		// FULFILLED
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = action.payload;
			state.error = '';
		})
	}
});

export default userSlice.reducer;