import Card from 'react-bootstrap/Card';

function SimpleCard(props) {
  return (
    <Card style={{width:"40%"}}>
      <Card.Body className='text-center p-2'>{props.text}</Card.Body>
    </Card>
  );
}

export default SimpleCard;