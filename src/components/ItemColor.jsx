import { Card, Container } from "react-bootstrap";

const ItemColor = (props) => {
  return (
    <Container className="d-flex flex-wrap justify-content-start">
      {props.colores.map((elementoColor, posicionColor) => (
        <Card key={posicionColor} style={{ width: "18rem" }}>
          <Card.Title className="text-center mt-2">{elementoColor}</Card.Title>

          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <div
                style={{
                backgroundColor: elementoColor,
                width: "100px",
                height: "100px",
                margin: "10px 0",
              }}
            ></div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ItemColor;
