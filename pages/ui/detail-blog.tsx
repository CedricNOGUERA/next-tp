import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const detailBlog = () => {
  return (
    <Container fluid className="px-0">
      <Container fluid className="text-center py-5">
        <h3>Article #</h3>
        <Container>
          <Col lg={8} className="m-auto">
            <Card className="text-start ">
              <Card.Img variant="top" src="https://picsum.photos/750/750" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default detailBlog
