import { ListGroup, Container, Row, Col } from "react-bootstrap";

function TrxItemRow({ trx } : any ) {
  const {
    acquiredAmount,
    acquiredSymbol,
    purchaseAmount,
    purchaseSymbol
  } = trx;

  return (
    <ListGroup.Item>
      <Container>
        <Row>
          <Col>{acquiredAmount}</Col>
          <Col>{acquiredSymbol}</Col>
          <Col>{purchaseAmount}</Col>
          <Col>{purchaseSymbol}</Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

export default TrxItemRow;
