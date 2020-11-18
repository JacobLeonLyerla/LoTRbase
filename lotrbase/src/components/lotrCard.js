import React, { useContext } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import {LOTRContext} from '../contexts/lotrProvider';

const LOTRCard = () => {
  const {books, setBooks} = useContext(LOTRContext)
  return (<CardDeck>
    {books.map(book => {
      return  (
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{book.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
      )
     }
   
   )}</CardDeck>
   
  );
};

export default LOTRCard;