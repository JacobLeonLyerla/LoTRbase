import React, { useContext } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import {LOTRContext} from '../contexts/lotrProvider';

const LOTRCard = () => {
  const {books, setBooks} = useContext(LOTRContext)
  console.log(books)
  return (<CardDeck>
    {books.map(book => {
      return  (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{book.name}</CardTitle>
          </CardBody>
        </Card>
      
      )
     }
   
   )}</CardDeck>
   
  );
};

export default LOTRCard;