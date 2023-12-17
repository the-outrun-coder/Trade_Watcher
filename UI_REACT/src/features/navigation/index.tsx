import { Container, Nav, NavDropdown, Navbar, NavbarToggle } from 'react-bootstrap';

function MainNavigation() {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href='#home'>Coin Market Stamp = Trade Watcher Prototype</Navbar.Brand>
				<NavbarToggle aria-controls='basic-nav-bar' />
				<Navbar.Collapse id='basic-nav-bar' className="justify-content-end">
					<Nav>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MainNavigation;
