import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// TODO - Create trx entity interface
interface Transaction {
	id: string,
	acquiredAmount: number,
	acquiredSymbol: string,
	purchaseAmount: number,
	purchaseSymbol: string
}

const initialState: Array<Transaction> = [];

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

			state = [
				...state,
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