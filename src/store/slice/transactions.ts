import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// TODO - Create trx entity interface

const initialState: Array<any> = [];

export const trxSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    // TODO - 
    addTrx: (state, action) => {
      state = state.push({
        ...{ id: uuidv4() },
        ...action.payload
      });
    }
    // modifyTrx
    // archiveTrx
    // removeTrx
  }
});

export const { addTrx } = trxSlice.actions;

export default trxSlice.reducer;