import { Accordion, Container, Nav, NavDropdown, Navbar, NavbarToggle } from 'react-bootstrap';
import './App.css'

import { Provider } from 'react-redux';
import { store } from './store';
import AddRecord from './features/add-record';
import TransactionList from './features/transaction-list';
import { fetchUsers } from './store/slice/users';
import DynamicContainer from './component/layout/dynamic-container';


function App() {

	// const getUsers =
	store.dispatch(fetchUsers());

	return (
		<Provider store={store}>

			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href='#home'>Coin Market Stamp = Trade Watcher Prototype</Navbar.Brand>
					<NavbarToggle aria-controls='basic-nav-bar' />
					<Navbar.Collapse id='basic-nav-bar'>
						<Nav className="me-auto">
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

			<DynamicContainer>
				<div className="proxy-router-feature-accordion">
					<Accordion defaultActiveKey="2">
						<Accordion.Item eventKey='0'>
							<Accordion.Header>
								Login
							</Accordion.Header>
							<Accordion.Body>
								{/* TODO - LOGIN ROUTE AND COMPONENT */}
								<h1>Login Feature goes here</h1>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey='1'>
							<Accordion.Header>Dashboard</Accordion.Header>
							<Accordion.Body>
								<h1>Dashboard goes here</h1>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey='2'>
							<Accordion.Header>Add Record</Accordion.Header>
							<Accordion.Body>
								<AddRecord/>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey='3'>
							<Accordion.Header>Transaction List</Accordion.Header>
							<Accordion.Body>
								<TransactionList/>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</DynamicContainer>
		</Provider>
	)
}

export default App
