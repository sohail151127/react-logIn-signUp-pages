import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rambo from "./images/rambo.jpg"
import ExampleModal from './Modal';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rambo} />
      <Card.Body>
        <Card.Title>Rambo</Card.Title>
        <Card.Text>
        Sylvester Enzio Stallone is an American actor and filmmaker.
        </Card.Text>
        <Button className='p-0'>
        <ExampleModal />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;