import React from 'react'
import { Container } from 'react-bootstrap'
import About from '../../components/Ui/About'

import 'bootstrap/dist/css/bootstrap.min.css';

const about = () => {
  return (
    <Container className="px-0 text-center" >
    <About />
    </Container>
  //   <Container fluid className="px-0">
  //   <Container className="col-12 col-md-8 col-lg-6 text-center py-5 px-5">
  //     <h3>A propos</h3>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
  //       turpis magna, dapibus sit amet imperdiet eget, accumsan sed magna.
  //       Aliquam metus nibh, vehicula fringilla elit eget, imperdiet finibus
  //       neque. Sed faucibus volutpat justo, sed interdum purus tristique eu.
  //       Quisque est nulla, congue a lorem at, pulvinar vestibulum velit. Donec
  //       id neque venenatis, mattis metus eget, sodales tellus. Aenean pulvinar
  //       euismod lorem sit amet semper.
  //     </p>
  //   </Container>
  // </Container>
    )
}

export default about
