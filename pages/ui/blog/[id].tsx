import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const detailBlog = ({blog}: any) => {
    const router: any = useRouter()
    const { id } = router.query

console.log(blog)

if (!router.isFallback && !blog?.id) {
  return ("error 404")
}

  return (
    <Container fluid className="px-0">
      <Container fluid className="text-center py-5">
      
      {router.isFallback ? (
          <p>Loading…</p>
        ) : (

        
        <>
     
        <Container>
         
          <Col lg={8} className="m-auto">
            <Card className="text-start ">
              <Card.Img variant="top" src={blog.url} />
              <Card.Body>
                <Card.Title>{blog.name}</Card.Title>
                <Card.Text>
               {blog.contenu}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Container>
        </>
        )}
      </Container>
    </Container>
  );
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar/${params.id}`)
  const data = await res.json()

  return {
    props: {
      blog: {
        ...data
      },
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`https://62a28042cd2e8da9b008d372.mockapi.io/navBar`)
  const data = await res.json()

  return {
    paths: data.map((blog: any) => {
      return {
        params: {
          id: blog.id,
        },
      }
    }),
    fallback: false,
  }
}

export default detailBlog
