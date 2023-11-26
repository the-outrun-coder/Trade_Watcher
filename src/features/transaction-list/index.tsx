import { ListGroup } from "react-bootstrap";

function TransactionList() {
  const testArray = [
    { id: 'assdkdl' },
    { id: 'eie8d8d' }
  ];

  return (
    <div className="all-trx-list">
      <ListGroup>
        {testArray.map((trx: any) => {
          return <ListGroup.Item key={trx.id}>
            asdf
          </ListGroup.Item>
        })}
      </ListGroup>
    </div>
  );
}

export default TransactionList;
