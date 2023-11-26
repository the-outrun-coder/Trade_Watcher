import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TrxItemRow from "./trx-item-row";

function TransactionList() {

  const transactions = useSelector((state: any) => state.transactions);

  return (
    <div className="all-trx-list">
      <ListGroup>
        {transactions.map((trx: any) => {
          return <TrxItemRow key={trx.id} />
        })}
      </ListGroup>
    </div>
  );
}

export default TransactionList;
