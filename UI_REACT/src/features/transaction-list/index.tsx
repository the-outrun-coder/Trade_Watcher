import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TrxItemRow from "./trx-item-row";

function TransactionList() {

  const transactions = useSelector((state: any) => state.transactions);

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
