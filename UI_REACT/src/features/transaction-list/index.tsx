import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import TrxItemRow from "./trx-item-row";

function TransactionList() {

  const transactions = useSelector((state: RootState) => state.transactions);

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
    ...transactions
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
