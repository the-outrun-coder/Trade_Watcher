import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// TODO - Create trx entity interface

const initialState: Array<any> = [];

export const trxSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTrx: (state, action) => {
      const {
        formAddTrx_acquiredAmount: acquiredAmount,
        formAddTrx_acquiredSymbol: acquiredSymbol,
        formAddTrx_purchaseAmount: purchaseAmount,
        formAddTrx_purchaseSymbol: purchaseSymbol
      } = action.payload;

      state = state.push({
          id: uuidv4(),
          acquiredAmount,
          acquiredSymbol,
          purchaseAmount,
          purchaseSymbol
      });
    }
    // modifyTrx
    // archiveTrx
    // removeTrx
  }
});

export const { addTrx } = trxSlice.actions;

export default trxSlice.reducer;