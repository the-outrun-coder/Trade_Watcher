import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Badge, Button } from 'react-bootstrap'
import { Provider } from 'react-redux'
import { store } from './store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>
        <Badge bg="secondary">New</Badge>
        <Button variant="primary">Exampe... tuh-duh</Button>
      </h1>
    </Provider>
  )
}

export default App
