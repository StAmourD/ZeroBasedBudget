import React from 'react';
import {Link} from 'react-router-dom';
import testImage from '../img/wallet.png';
import {LinkContainer} from 'react-router-bootstrap';
import {Image, Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/">
            <Image src={testImage}/>
          </LinkContainer>
          <Navbar.Brand>
            <Link to="/">Zero Based Budget</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/budget">
              <NavItem eventKey={1}>Budget</NavItem>
            </LinkContainer>
            <LinkContainer to="/barchart">
              <NavItem eventKey={2}>Chart</NavItem>
            </LinkContainer>
            <LinkContainer to="/import">
              <NavItem eventKey={3}>Import</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/settings">
              <NavItem eventKey={1}>Settings</NavItem>
            </LinkContainer>
            <LinkContainer to="/logout">
              <NavItem eventKey={2}>Log Out</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
