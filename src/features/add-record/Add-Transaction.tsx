import { Button, Col, Form, Row } from "react-bootstrap";
import { store } from "../../store";
import { addTrx } from "../../store/slice/transactions";

const handleAddTrx = async (event: React.SyntheticEvent) => {
  event.preventDefault();

  const formTarget = new FormData(event.nativeEvent.target);
  
  console.log(event);
  // debugger;

  const providedEntries = Object.fromEntries(formTarget.entries());

  // console.log('Form Data:', event.target);
  console.log('Form Data:', providedEntries);
}

function AddTransaction() {
  const formIdPrefix = 'formAddTrx';
  const inputId = {
    acqAmtId: `${formIdPrefix}_acquiredAmount`,
    acqSymId: `${formIdPrefix}_acquiredSymbol`,
    paidAmt :`${formIdPrefix}_purchaseAmount`,
    paidSym :`${formIdPrefix}_purchaseSymbol`,
  };

  // X - REMOVE
  store.dispatch(addTrx({test: true, apples: 3, merp: 'derp'}));

  return (
    <Form onSubmit={handleAddTrx}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId={inputId.acqAmtId}>
          <Form.Label>Amount Purchased</Form.Label>
          <Form.Control name={inputId.acqAmtId}/>
        </Form.Group>

        <Form.Group as={Col} controlId={inputId.acqSymId}>
          <Form.Label>Purchase Symbol</Form.Label>
          <Form.Control name={inputId.acqSymId}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId={inputId.paidAmt}>
          <Form.Label>Amount Paid</Form.Label>
          <Form.Control name={inputId.paidAmt}/>
        </Form.Group>

        <Form.Group as={Col} controlId={inputId.paidSym}>
          <Form.Label>Paid Symbol</Form.Label>
          <Form.Control name={inputId.paidSym}/>
        </Form.Group>
      </Row>

      <Button type="submit" variant="primary">Add Transaction</Button>
    </Form>
  );
}

export default AddTransaction;