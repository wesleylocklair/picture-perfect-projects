import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'

function App() {
 
  return (
    <>
      <div>
        <header>
        <h1>Wesley Locklair</h1>
        <Nav />
        </header>
        <Outlet />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <footer id="footer">
          Thank you for visiting!
        </footer>
      </div>
    </>
  )
}

export default App
