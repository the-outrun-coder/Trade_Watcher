import { createSlice } from '@reduxjs/toolkit';

// TODO - Create trx entity interface

const initialState: Array<unknown> = [];

export const trxSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    // TODO - 
  }
});

// TODO - EXPORT TRX.ACTIONS

export default trxSlice.reducer;