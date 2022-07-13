import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import './Navbar.css';
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { authConstants } from '../../../redux/constants';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/bengalsoftware.png'
const Navbars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('student');
    navigate('/student/login');
  }


  const student = localStorage.getItem('student');
  const auth = JSON.parse(student);


  const nav = student ?
    <Navbar className="Navbar2" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"> <img style={{ height: '4rem' }} src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: 'white', padding: '0.8rem' }} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar" href="/">Home</Nav.Link>
            <Nav.Link className="navbar" href="/teacher">Teacher</Nav.Link>
            <Nav.Link className="navbar" href="/student/portal">Student Portal</Nav.Link>
            <Nav.Link className="navbar" href="/student/classlecture">Class Lecture</Nav.Link>
            <Nav.Link className="navbar" href="/student/result">Result</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link className="navbar" href="/login">{auth.name}</Nav.Link>
            <Nav.Link className="navbar" onClick={logout} href="/singup">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    :
    <Navbar className="Navbar2" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"><img style={{ height: '4rem' }} src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: 'white', padding: '0.8rem' }} id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbar" href="/">Home</Nav.Link>
            <Nav.Link className="navbar" href="/teacher">Teacher</Nav.Link>
            <Nav.Link className="navbar" href="/student/portal">Student Portal</Nav.Link>
            <Nav.Link className="navbar" href="/student/classlecture">Class Lecture</Nav.Link>
            {/* <NavDropdown style={{ width: '0.5rem' }} title="Dropdown">
              <NavDropdown.Item style={{ width: '0.5rem' }} href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item style={{ width: '0.5rem' }} href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item style={{ width: '0.5rem' }} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link className="navbar" href="/student/login">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  return (
    <div>
      <Navbar className="Navbar1" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbarelement" href="/"><FaPhoneAlt /> +8801XXX-XXXXXX</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"><IoMailSharp /> abc@gmail.com</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login"><FaFacebook /></Nav.Link>
              <Nav.Link href="/singin"><FaGoogle /></Nav.Link>
              <Nav.Link href="/"><FaTwitter /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {nav}
    </div >
  );
};

export default Navbars;