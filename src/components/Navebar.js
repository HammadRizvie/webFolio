import React from 'react';
import '../index.css';
import Folio from './Image/folio2.jpg'
import Home from './Image/home2.jpg'
import About from './Image/about2.jpg'
import Skills from './Image/skills.png'
import Experience from './Image/experience.png'
import Design from './Image/design2.jpg'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class NaveBar extends React.Component
{

 
    render()
    {
        return(
            <div>
  
 <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
 <img id="folioLogo" src = {Folio} alt = "logo"/>
  <Navbar.Brand href="#home">
  <button id="nameBtn" className="btn btn-outline">
    <a className="navbar-brand"  href="https://webfolio-e30b0.web.app"><span id="nameText">Hammad Rizvi</span></a>
    </button>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#introDiv" id="navTextCentre"> <img className="navLogos" src = {Home} alt = "logo"/><span className="navText">HOME</span></Nav.Link>
      <Nav.Link href="#personalInfoMainDiv"><img className="navLogos" src = {About} alt = "logo"/><span className="navText">ABOUT</span></Nav.Link>
      <Nav.Link href="#skillsMainDiv"> <img className="navLogos" src = {Skills} alt = "logo"/><span className="navText">SKILLS</span></Nav.Link>
      <Nav.Link  href="#experienceMainDiv">  <img className="navLogos" src = {Experience} alt = "logo"/><span className="navText">EXPERIENCE</span></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<div>
  <img id="designImage" src={Design} />
</div>
            </div>

        )
    }
}

export default NaveBar;