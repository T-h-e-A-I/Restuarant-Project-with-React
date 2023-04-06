import React, { Component } from "react";
import { NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom"
class Navigation extends Component {
    state = {
        open: true
    }
    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <Navbar
                dark
                color="dark"
                light expand="md"
            >
                <NavbarBrand href="/">
                    Ruma's Recipe
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.open} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <Link id="home" to="/" className="nav-link active">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem >
                            <Link id="menu" to="/menu" className="nav-link">
                                Menu
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link id="about" to="/about" className="nav-link">
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link id="contact" to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
export default Navigation;