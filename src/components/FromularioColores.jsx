import { Button, Container, Form } from "react-bootstrap";


const FromularioColores = () => {
  return (
   
   <Container>
    <Form>
    
        <Form.Group
          className="mb-3 d-flex"
        >
          <Form.Label><h5>Enter a color:</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Blue "
            minLength={3}
            maxLength={10}
                     
          />
          <Button className="mx-2" type="submit" variant="info">
            Accept
          </Button>
        </Form.Group>
        
      </Form>
      </Container>
   
   
  );
};

export default FromularioColores;
