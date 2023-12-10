import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Transaction {
	id: string,
	acquiredAmount: number,
	acquiredSymbol: string,
	purchaseAmount: number,
	purchaseSymbol: string
}

interface TRX_STATE {
	trxHistory: Array<Transaction>
}

// const initialState: Array<Transaction> = [];
const initialState: TRX_STATE = {
	trxHistory: []
}

export const trxSlice = createSlice({
  name: 'trxAccount',
  initialState,
  reducers: {
    addTrx: (state, action) => {
      const {
        formAddTrx_acquiredAmount: acquiredAmount,
        formAddTrx_acquiredSymbol: acquiredSymbol,
        formAddTrx_purchaseAmount: purchaseAmount,
        formAddTrx_purchaseSymbol: purchaseSymbol
      } = action.payload;

			state.trxHistory = [
				...state.trxHistory,
				...[{
					id: uuidv4(),
          acquiredAmount,
          acquiredSymbol,
          purchaseAmount,
          purchaseSymbol
				}]
			];
    }
    // modifyTrx
    // archiveTrx
    // removeTrx
  }
});

export const { addTrx } = trxSlice.actions;

export default trxSlice.reducer;