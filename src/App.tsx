import { Accordion } from 'react-bootstrap';
import './App.css'

import { Provider } from 'react-redux';
import { store } from './store';


function App() {

  return (
    <Provider store={store}>
      <div className="header-nav">
        <h1>Trade Watcher Prototype</h1>
      </div>

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
              <h1>Add records here</h1>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header>Transaction List</Accordion.Header>
            <Accordion.Body>
              <h1>Trx List goes here!</h1>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>  

    </Provider>
  )
}

export default App
