import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoBlue from '../../public/image/logo-blue.png';
import CVModal from './CVModal';
import './css/Header.css';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <header className="header">
      <Navbar className='navbar' bg="black" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logoBlue} alt="M.Khan" width="50" height="50" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-links">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#cards">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-content text-center mt-5">
        <div className="header-text">
          <p>Full Stack Developer</p>
          <h1>
            Hi, I am <br />
            <span className="name">Mohammed</span>
            <br />
            <span className="second-header">Khan</span>
            <br />
          </h1>
          <h1 className="uk">From The UK</h1>
        </div>
        <div className="btn-box mt-4">
          <Button onClick={handleShow} className="btn btn-primary">C.V</Button>
          <a href="https://github.com/Atiq717?tab=repositories" target="_blank" className="btn btn-secondary">GitHub</a>
        </div>
      </div>
      <CVModal show={showModal} handleClose={handleClose} />
    </header>
  );
};

export default Header;
