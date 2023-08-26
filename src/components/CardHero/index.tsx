import Card from 'react-bootstrap/Card';
import { ICardHeroes } from './@types';
import { MyVerticallyCenteredModal } from './ModalHero';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export function CardHero({id,name,thumbnail,description}: ICardHeroes) {
  const imageUrl = `${thumbnail?.path}/portrait_medium.${thumbnail?.extension}`;
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '18rem', margin:'10px' }} className='border-5'>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={handleShow}>
        For more Info
      </Button>
      {show && (
        <MyVerticallyCenteredModal id={id} show={show}  handleClose={handleClose} />

      )}
        
      </Card.Body>
    </Card>
  );
}
