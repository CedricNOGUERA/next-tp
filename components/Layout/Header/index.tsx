import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>  <Link href="/">
                    <a className='text-decoration-none text-secondary'>Next blog</a>
                  </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              
                <Navbar.Text className="ms-auto">

                <Link href="/ui/about">
                    <a className='text-decoration-none text-secondary me-4'>About</a>
                  </Link>
                <Link href="/ui/blog">
                    <a className='text-decoration-none text-secondary'>Blog</a>
                  </Link>
                </Navbar.Text>
                    
               
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
  )
}

export default Header
