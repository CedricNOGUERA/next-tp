import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Container fluid className="px-0">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="home">Next blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="ms-auto">
                <Nav.Link href="About">About</Nav.Link>
                <Nav.Link href="slink">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Container fluid className="px-0">
        {/* Section About */}
        <section>
          <Container className="col-12 col-md-8 col-lg-6 text-center py-5">
            <h3>A propos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              turpis magna, dapibus sit amet imperdiet eget, accumsan sed magna.
              Aliquam metus nibh, vehicula fringilla elit eget, imperdiet
              finibus neque. Sed faucibus volutpat justo, sed interdum purus
              tristique eu. Quisque est nulla, congue a lorem at, pulvinar
              vestibulum velit. Donec id neque venenatis, mattis metus eget,
              sodales tellus. Aenean pulvinar euismod lorem sit amet semper.
            </p>
          </Container>
        </section>
        <section>
          <Container fluid className="text-center  bg-light py-5">
            <h3>Articles récents</h3>
            <Container >
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                <Col lg={3}>
                  <Card className='text-start '>
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/200/120"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                <Card className='text-start '>
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/200/120"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                <Card className='text-start '>
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/200/120"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
        <section>
          <Container className='text-center'>
            Copyright
          </Container>
        </section>
      </Container>
    </Container>
  );
}

export default Home
