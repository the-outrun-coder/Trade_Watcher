import { Button, Form, InputGroup } from "react-bootstrap";

function AddTransaction() {
  return (
    <Form>
      <Form.Group controlId="formAddTrx_acquiredAmount">
        <InputGroup className="mb-3">
          <InputGroup.Text>Amount Purchased</InputGroup.Text>
          <Form.Control/>
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formAddTrx_acquiredSymbol">
        <InputGroup className="mb-3">
          <InputGroup.Text>Purchase Symbol</InputGroup.Text>
          <Form.Control/>
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formAddTrx_purchaseAmount">
        <InputGroup className="mb-3">
          <InputGroup.Text>Amount Paid</InputGroup.Text>
          <Form.Control/>
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formAddTrx_purchaseSymbol">
        <InputGroup className="mb-3">
          <InputGroup.Text>Paid Symbol</InputGroup.Text>
          <Form.Control/>
        </InputGroup>
      </Form.Group>

      <Button type="submit" variant="primary">Add Transaction</Button>
    </Form>
  );
}

export default AddTransaction;