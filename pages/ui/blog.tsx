import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const _blog = () => {
  return (
    <Container fluid className="px-0 py-5 text-center justify-content-center">
      <h3 className='pb-4'>Tous les articles</h3>
      <Container >
        <Row xs={1} md={2} lg={4} className="g-md-2 g-lg-4">
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "100%" }} className="text-start">
              <Card.Img variant="top" src="https://picsum.photos/200/120" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">Lire l&apos;article</a>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
         
         
        </Row>
      </Container>
    </Container>
  );
}

export default _blog