import React from 'react'
import {
    Card,
    Col,
    Container,
    Row,
  } from "react-bootstrap";
import Link from "next/link";
import { GetServerSideProps } from "next";

const NewArticles = (data: any) => {
console.log(data)

  return (
    <section>
    <Container fluid className="text-center  bg-light py-5">
      <h3>Articles récents</h3>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {data.datax ? (
            <>
              <Col lg={3}>
                <Card className="text-start h-100">
                  <Card.Img variant="top" src={data.datax[0].url} />
                  <Card.Body>
                    <Card.Title>{data.datax[0].name}</Card.Title>
                    <Card.Text>{data.datax[0].contenu}</Card.Text>
                    <Link href={`/ui/detail-blog`}>
                    {/* <Link href={`/ui/detail-blog/${data.datax[0].id}`}> */}
                      <a className="btn btn-sm btn-outline-primary">
                        Lire l&apos;article
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="text-start h-100">
                  <Card.Img variant="top" src={data.datax[1].url} />
                  <Card.Body>
                    <Card.Title>{data.datax[1].name}</Card.Title>
                    <Card.Text>{data.datax[1].contenu}</Card.Text>
                    <Link href={`/ui/detail-blog/${data.datax[1].id}`}>
                      <a className="btn btn-sm btn-outline-primary">
                        Lire l&apos;article
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card className="text-start h-100">
                  <Card.Img variant="top" src={data.datax[2].url} />
                  <Card.Body>
                    <Card.Title>{data.datax[2].name}</Card.Title>
                    <Card.Text>{data.datax[2].contenu}</Card.Text>
                    <Link href={`/ui/detail-blog/${data.datax[2].id}`}>
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
  )
}

  

export default NewArticles
