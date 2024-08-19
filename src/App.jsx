import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';


function App() {
 
  return (
    <>
      <div>
        <header>
        <h1>Wesley Locklair</h1>
        <Nav />
        </header>
        <Outlet />
  
        <footer id="footer">
          Thank you for visiting!
        </footer>
      </div>
    </>
  )
}

export default App
