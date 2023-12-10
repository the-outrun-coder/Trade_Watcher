import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrxItemRow from "./trx-item-row";

function TransactionList() {

  const transactionList = useSelector((state: RootState) => state.transactions.trxHistory);

  const trxList = [
    ...[
      {
        id: 'header',
        acquiredAmount: 'Amount',
        // acquiredSymbol,
        purchaseAmount: 'Paid',
        // purchaseSymbol
      }
    ],
    ...transactionList
  ];

  return (
    <div className="all-trx-list">
      <ListGroup>
        {trxList.map((trx: any) => {
          return <TrxItemRow key={trx.id} trx={trx} />
        })}
      </ListGroup>
    </div>
  );
}

export default TransactionList;
