import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Header from '../components/Layout/Header';
import About from '../components/Ui/About';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container fluid className="px-0">
      <About />

      <section>
        <Container fluid className="text-center  bg-light py-5">
          <h3>Articles récents</h3>
          <Container>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
              <Col lg={3}>
                <Card className="text-start ">
                  <Card.Img variant="top" src="https://picsum.photos/200/120" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">
                      Lire l&apos;article
                    </a>
                  </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="text-start ">
                  <Card.Img variant="top" src="https://picsum.photos/200/120" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">
                      Lire l&apos;article
                    </a>
                  </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="text-start ">
                  <Card.Img variant="top" src="https://picsum.photos/200/120" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  <Link href="/ui/detail-blog">
                    <a className="btn btn-sm btn-outline-primary">
                      Lire l&apos;article
                    </a>
                  </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </Container>
  );
}

export default Home
