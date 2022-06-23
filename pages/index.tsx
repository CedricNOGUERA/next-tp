import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Header from "../components/Layout/Header";
import About from "../components/Ui/About";
import Footer from "../components/Layout/Footer";
import Link from "next/link";
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <Container fluid className="px-0">
      <About />
      <section>
        <Container fluid className="text-center  bg-light py-5">
          <h3>Articles récents</h3>
          <Container>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
              {data ? (
                <>
                  <Col lg={3} className="h-100">
                    <Card className="text-start h-100">
                      <Card.Img variant="top" src={data[0].url} />
                      <Card.Body>
                        <Card.Title>{data[0].name}</Card.Title>
                        <Card.Text>{data[0].contenu}</Card.Text>
                        <Link href="/ui/detail-blog">
                          <a className="btn btn-sm btn-outline-primary">
                            Lire l&apos;article
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3} className="">
                    <Card className="text-start h-100">
                      <Card.Img variant="top" src={data[1].url} />
                      <Card.Body>
                        <Card.Title>{data[1].name}</Card.Title>
                        <Card.Text>{data[1].contenu}</Card.Text>
                        <Link href="/ui/detail-blog">
                          <a className="btn btn-sm btn-outline-primary">
                            Lire l&apos;article
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3} className="">
                    <Card className="text-start h-100">
                      <Card.Img variant="top" src={data[2].url} />
                      <Card.Body>
                        <Card.Title>{data[2].name}</Card.Title>
                        <Card.Text>{data[2].contenu}</Card.Text>
                        <Link href="/ui/detail-blog">
                          <a className="btn btn-sm btn-outline-primary">
                            Lire l&apos;article
                          </a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ) : (
                <p>loading...</p>
              )}
            </Row>
          </Container>
        </Container>
      </section>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
