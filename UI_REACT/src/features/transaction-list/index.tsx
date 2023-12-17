import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrxItemRow from "./trx-item-row";
import { Transaction } from "../../store/slice/transactions";

function TransactionList() {

  const transactionList = useSelector((state: RootState) => state.transactions.trxHistory);

	// FIX - NEED alt solution for header display not an actual trx type
  // const trxList = [
  //   ...[
  //     {
  //       id: 'header',
  //       acquiredAmount: 'Amount',
  //       acquiredSymbol: '',
  //       purchaseAmount: 'Paid',
  //       purchaseSymbol: ''
  //     }
  //   ],
  //   ...transactionList
  // ];

  return (
    <div className="all-trx-list">
      <ListGroup>
        {transactionList.map((trx: Transaction) => {
          return <TrxItemRow key={trx.id} trx={trx} />
        })}
      </ListGroup>
    </div>
  );
}

export default TransactionList;
