import React from 'react';
import { Header, Footer } from './components/common';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import NewNav from './components/common/navbar/newNav';
import './Colleges.css';


function Colleges() {
  return (
    <div>
        <NewNav />

        <form action="/" method="get" className="collegeSearch">
          <input
            type="text"
            placeholder="Search Colleges"
            className="searchBox"
          />
        </form>

            <Card className="card">
              <Card.Img variant="top" src={window.location.origin + '/images/miami-logo.jpg'} alt="Miami University"/>
              <Card.Body>
                  <Card.Title>Miami University</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>


            <Card className="card">
              <Card.Img variant="top" src={window.location.origin + '/images/miami-logo.jpg'} alt="Miami University"/>
              <Card.Body>
                  <Card.Title>Miami University</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>

            <Footer />

    </div>
  );
}

export default Colleges;
