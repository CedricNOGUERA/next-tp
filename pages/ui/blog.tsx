import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const _blog = ({data}: any) => {

    const router = useRouter()
    const { pid } = router.query
    console.log(pid)
  return (
    <Container fluid className="px-0 py-5 text-center justify-content-center">
      <h3 className="pb-4">Tous les articles</h3>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-md-2 g-lg-4">
          {data?.map((art: any) => (
            <>
              <Col key={art.id}>
                <Card style={{ width: "100%" }} className="text-start h-100">
                  <Card.Img variant="top" src={art.url} />
                  <Card.Body>
                    <Card.Title>{art.name}</Card.Title>
                    <Card.Text>{art.contenu}</Card.Text>
                    <Link href={`/ui/blog/${art.id}`}>
                      <a className="btn btn-sm btn-outline-primary">
                        Lire l&apos;article
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Fetch data from external API
    const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar`)
    const data = await res.json()
    
    // Pass data to the page via props
    return { props: { data } }
  }

export default _blog