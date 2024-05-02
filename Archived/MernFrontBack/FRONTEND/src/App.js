import{ BrowserRouter, Router,Route} from 'react-router-dom'
import Home from './pages/home'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <NavBar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element= {<Home/>}
          />
          </Routes>
        </div>
        </BrowserRouter>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
