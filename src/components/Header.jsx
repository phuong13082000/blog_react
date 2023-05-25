import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>

                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header